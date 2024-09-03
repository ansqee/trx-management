import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Murinda Transaction Management',
  description: 'Manage your transactions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          
          <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">
                Murinda
              </h1>
              <nav>
                <ul className="flex space-x-4">
                  <li><a href="/currency" className="hover:text-gray-200">CoA</a></li>
                  <li><a href="/currency" className="hover:text-gray-200">Transaction</a></li>
                  <li><a href="/currency" className="hover:text-gray-200">Currencies</a></li>
                  <li><a href="/currency" className="hover:text-gray-200">Journals</a></li>
                  <li><a href="/currency" className="hover:text-gray-200">Projects</a></li>
                  <li><a href="/currency" className="hover:text-gray-200">Departments</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
              <p>&copy; Murinda. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
