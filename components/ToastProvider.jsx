'use client';

import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

export default function ToastProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#0B0B0F',
          color: '#ffffff',
          border: '1px solid rgba(0, 64, 255, 0.2)',
          padding: '16px',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          maxWidth: '500px',
        },
        success: {
          iconTheme: {
            primary: '#0040FF',
            secondary: '#ffffff',
          },
          style: {
            border: '1px solid rgba(0, 166, 81, 0.3)',
            background: 'linear-gradient(135deg, #0B0B0F 0%, #0B0B0F 100%)',
          },
        },
        error: {
          iconTheme: {
            primary: '#0B0B0F',
            secondary: '#ffffff',
          },
          style: {
            border: '1px solid rgba(220, 38, 38, 0.3)',
            background: 'linear-gradient(135deg, #0B0B0F 0%, #0B0B0F 100%)',
          },
        },
        loading: {
          iconTheme: {
            primary: '#0040FF',
            secondary: '#ffffff',
          },
          style: {
            border: '1px solid rgba(0, 64, 255, 0.3)',
          },
        },
      }}
    />
  );
}
