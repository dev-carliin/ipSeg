/* eslint-disable @next/next/next-script-for-ga */
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script'; // Importe o componente Script

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
        {/* O componente Script lida com a Tag do Google Ads */}
        <Script
          id="google-ads-script" // ID único para o script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17270584181"
          strategy="afterInteractive" // Carrega o script depois que a página se torna interativa
        />
        <Script
          id="google-ads-config" // ID único para o script de configuração
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17270584181');
            `,
          }}
          strategy="afterInteractive" // Carrega o script depois que a página se torna interativa
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