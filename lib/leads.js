import fs from "node:fs";
import path from "node:path";

/**
 * Lead storage.
 *
 * Leads are appended to a JSON file on disk. That is deliberate  -  this site
 * has no database, and adding one for a contact form would be a large amount
 * of operational surface for a small amount of data.
 *
 * IMPORTANT DEPLOYMENT NOTE
 * -------------------------
 * Serverless filesystems (Vercel, Netlify) are read-only apart from /tmp, and
 * /tmp does not persist between invocations. On those platforms this store
 * will accept a lead and lose it.
 *
 * So `saveLead` never relies on the write succeeding: it always emits the lead
 * to the process log first, which every host retains and which can be piped to
 * an alerting tool. Set LEAD_WEBHOOK_URL to forward leads somewhere durable
 * (Slack, Zapier, a CRM) and the file becomes a local convenience rather than
 * the system of record.
 */

const DATA_DIR = path.join(process.cwd(), ".data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

export function readLeads() {
  try {
    if (!fs.existsSync(LEADS_FILE)) return [];
    const raw = fs.readFileSync(LEADS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLeads(leads) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch {
    // Read-only filesystem. The log line below is the durable record.
    return false;
  }
}

async function forwardToWebhook(lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text:
          `New brief from ${lead.name} (${lead.email})\n` +
          `Service: ${lead.service}\n` +
          `Budget: ${lead.budget || "not stated"}\n` +
          `Timeline: ${lead.timeline || "not stated"}\n\n` +
          lead.message,
        lead,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function saveLead(input) {
  const lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    receivedAt: new Date().toISOString(),
    status: "new",
    ...input,
  };

  // The log line is written first and unconditionally, so a lead is never lost
  // to a failed disk write or an unconfigured webhook.
  console.log("[LEAD]", JSON.stringify(lead));

  const leads = readLeads();
  leads.unshift(lead);
  const persisted = writeLeads(leads);
  const forwarded = await forwardToWebhook(lead);

  return { lead, persisted, forwarded };
}

export function updateLeadStatus(id, status) {
  const leads = readLeads();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return false;

  leads[index].status = status;
  leads[index].updatedAt = new Date().toISOString();
  return writeLeads(leads);
}
