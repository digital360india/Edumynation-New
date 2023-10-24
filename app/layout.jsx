import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata()
 {  
  return{
    title: "Edumynation",
    description: "UAE's premier school listing portal, offering comprehensive insights into the  educational landscape. Compare and select the ideal school for your child.",
    icons: [{ rel: 'icon', url: '/logo.png' }],
    };
 }

const RootLayout = ({ children }) => (
  <html lang='en'>
    {/* <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
    </head> */}
    <head>
    <meta name="google-site-verification" content="MomfbjMIvMGCq0OjGaeo1fM8fjZEPkrNpqvwnd1ISIY" />
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
