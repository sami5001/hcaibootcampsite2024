import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HcAI Design Bootcamp",
  description: "Human-Centered Medical AI Design Bootcamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Script to restore the dark mode preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Check if user has a saved preference
                  const storedTheme = localStorage.getItem('theme');
                  
                  // Check system preference
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  // Apply dark mode if explicitly set to dark or if no preference is set and system prefers dark
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  
                  // Listen for changes in system preference if no user preference is stored
                  if (!storedTheme) {
                    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                      if (e.matches) {
                        document.documentElement.classList.add('dark');
                      } else {
                        document.documentElement.classList.remove('dark');
                      }
                    });
                  }
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
