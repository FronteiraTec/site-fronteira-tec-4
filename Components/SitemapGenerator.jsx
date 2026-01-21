"use client";

import { useEffect } from 'react';

export default function SitemapGenerator() {
  useEffect(() => {
    // Generate sitemap data for SEO reference
    const baseUrl = window.location.origin;
    const currentDate = new Date().toISOString().split('T')[0];
    
    const pages = [
      { url: '/', changefreq: 'weekly', priority: '1.0' },
      { url: '/#sobre', changefreq: 'monthly', priority: '0.8' },
      { url: '/#servicos', changefreq: 'monthly', priority: '0.8' },
      { url: '/#portfolio', changefreq: 'weekly', priority: '0.7' },
      { url: '/#contato', changefreq: 'monthly', priority: '0.9' },
      { url: '/ProcessoSeletivo', changefreq: 'weekly', priority: '0.8' },
    ];

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Store sitemap in window for potential use
    window.__SITEMAP_XML__ = sitemapXML;

    // Add structured data (JSON-LD) for organization
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FronteiraTec",
      "description": "Empresa especializada em desenvolvimento de software, aplicativos mobile, sistemas web e consultoria em TI",
      "url": baseUrl,
      "logo": `${baseUrl}/images/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-99999-9999",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://linkedin.com/company/fronteiratec",
        "https://instagram.com/fronteiratec",
        "https://github.com/fronteiratec"
      ]
    };

    structuredData.textContent = JSON.stringify(organizationSchema);

  }, []);

  return null;
}