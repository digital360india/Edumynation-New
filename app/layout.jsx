import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Edumynation",
  description: "UAE's premier school listing portal, offering comprehensive insights into the  educational landscape. Compare and select the ideal school for your child.",
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      {/* <link rel="icon" href="https://cdn.discordapp.com/attachments/1078905801017659432/1110839909721317386/image_1.png" type="image/x-icon" sizes="any" /> */}
    </head>
    <body style={{backgroundColor:"white"}}>
        <main className='app  '>
          <Navbar />
          {children}
          <Footer />
        </main>
    </body>
  </html>
);

export default RootLayout;
