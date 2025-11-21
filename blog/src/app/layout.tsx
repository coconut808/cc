import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog built with Next.js and Markdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <a href="/" className="hover:underline">My Blog</a>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Thoughts, stories and ideas
            </p>
          </header>
          <main>{children}</main>
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
