import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Edumynation",
  description: "Site is not completed yet work is ongoing ",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Navbar />
          {children}
          <Footer />
        </main>
    </body>
  </html>
);

export default RootLayout;
