import './globals.css'
import Footer from "./componets/footer/footer";
import Navbar from "./componets/navbar/Navbar";
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '@/context/themeContext';
import ThemeProvider from '@/providers/themeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
              <div className='wrapper'>
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
