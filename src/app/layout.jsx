'use client';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='scroll-smooth overflow-x-hidden flex flex-col font-sans bg-primary'>
          {children}
      </body>
    </html>
  );
}
