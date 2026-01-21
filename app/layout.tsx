import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FronteiraTec - Transformando ideias em soluções digitais",
  description: "Empresa júnior de tecnologia especializada em desenvolvimento de software personalizado. Criamos soluções digitais que impulsionam o crescimento dos nossos parceiros.",
  keywords: "desenvolvimento web, aplicativos mobile, sistemas empresariais, empresa júnior, tecnologia, chapecó",
  authors: [{ name: "FronteiraTec" }],
  creator: "FronteiraTec",
  publisher: "FronteiraTec",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fronteiratec.com/",
    title: "FronteiraTec - Transformando ideias em soluções digitais",
    description: "Empresa júnior de tecnologia especializada em desenvolvimento de software personalizado.",
    siteName: "FronteiraTec",
  },
  twitter: {
    card: "summary_large_image",
    title: "FronteiraTec - Transformando ideias em soluções digitais",
    description: "Empresa júnior de tecnologia especializada em desenvolvimento de software personalizado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload recursos críticos */}
        <link rel="preload" href="/imagens/SemFronteiras.png" as="image" />
        <link rel="preconnect" href="https://qtrypzzcjebvfcihiynt.supabase.co" />
        <link rel="dns-prefetch" href="https://qtrypzzcjebvfcihiynt.supabase.co" />
        
        {/* Meta tags de performance */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
