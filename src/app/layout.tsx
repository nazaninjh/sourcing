import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import clsx from "clsx";

const faFont = localFont({
  src: [
    {
      path: "./../assets/fonts/IRANSansXFaNum-Regular.woff2",
    },
    {
      path: "./../assets/fonts/IRANSansXFaNum-Regular.woff",
    },
    {
      path: "./../assets/fonts/IRANSansXFaNum-Regular.ttf",
    },
  ],
  variable: "--font-fa",
});

const rozhaFont = localFont({
  src: [
    {
      path: "./../assets/fonts/rozhaone-regular-webfont.woff2",
    },
    {
      path: "./../assets/fonts/rozhaone-regular-webfont.woff",
    },
  ],
  variable: "--rozha-fa",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://sourcing-six.vercel.app/"),
  generator: "Next.js",
  applicationName: "Beigi Group CrowdSourcing",
  keywords: [
    "جمع سپاری",
    "بیگی گروپ",
    "سین دیزاینر",
    "طراحی سوله",
    "ساخت سوله",
    "طراحی سوله سه بعدی",
    "sindesigner",
    "sin designer",
    "beigi group",
    "مسابقه پیمانکاران",
  ],
  creator: "nazanin hashemi from beigi group",
  title: {
    template: "%s | جمع سپاری",
    default: "جمع سپاری", // a default is required when creating a template
  },
  description:
    "گروه صنعتی بیگی، اولین استارت آپ جمع سپاری و مسابقات معماری ایران",

  //    openGraph: {
  //   title: 'Next.js',
  //   description: 'The React Framework for the Web',
  //   url: 'https://nextjs.org',
  //   siteName: 'Next.js',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png', // Must be an absolute URL
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
  //       width: 1800,
  //       height: 1600,
  //       alt: 'My custom alt',
  //     },
  //   ],
  //   videos: [
  //     {
  //       url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   audio: [
  //     {
  //       url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },

  //  icons: {
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={clsx(faFont.variable, rozhaFont.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
