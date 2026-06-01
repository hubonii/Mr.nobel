import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr Nobel — Brand & Content Program 2026",
  description: "مستر نوبل — برنامج صناعة المحتوى والهوية البصرية 2026. العقل الفضولي الذي لا يمكنك التوقف عن متابعته.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Almarai:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#050505] text-white selection:bg-[#FF0D39] selection:text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
