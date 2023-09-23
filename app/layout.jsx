import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Edumynation",
  description: "UAE's premier school listing portal, offering comprehensive insights into the  educational landscape. Compare and select the ideal school for your child.",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <main className='app  '>
          <Navbar />
          {children}
          <Footer />
        </main>
    </body>
  </html>
);

export default RootLayout;
