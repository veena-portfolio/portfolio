import "./globals.css";

// Closest Google Fonts to the Canva fonts used in the PDF, loaded by the
// browser (families are mapped to CSS variables in globals.css).
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Allison&family=Cormorant:wght@300&family=Mrs+Saint+Delafield&family=Pinyon+Script&family=Playfair+Display:ital,wght@1,800&family=Poppins:wght@400;700&display=swap";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Veena S — Fashion & Apparel Design Portfolio",
  description:
    "Portfolio of Veena S, fashion and apparel designer from Bengaluru. Collections: Flame in Bloom, Endless Rhythm and Plumage.",
  openGraph: {
    title: "Veena S — Fashion & Apparel Design Portfolio",
    images: [`${basePath}/images/cover.jpg`],
  },
  icons: { icon: `${basePath}/favicon.svg` },
};

export const viewport = { themeColor: "#faf9f5" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- single-page app */}
        <link rel="stylesheet" href={FONTS_URL} />
        {/* Lets CSS hide reveal-on-scroll content only when JS is available. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
