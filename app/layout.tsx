import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: '2Pac',
  description: 'Official fan site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
