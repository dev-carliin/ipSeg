/* eslint-disable @next/next/next-script-for-ga */
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IPSEG - Conectados à sua segurança',
  description: 'Soluções inteligentes em segurança eletrônica para sua casa ou empresa.',
  keywords: 'segurança eletrônica, câmeras de segurança, cerca elétrica, automação residencial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
        <head>
        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17270584181"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17270584181');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}