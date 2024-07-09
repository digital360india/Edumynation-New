import './globals.css'

import 'react-multi-carousel/lib/styles.css';

import Authprovider from '@/components/Authprovider/Authprovider';
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Popup1 from '@/components/Popup1';
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
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9850183935400740"
     crossorigin="anonymous"></script>
    </head>
    <body style={{backgroundColor:"white"}}>
    <Authprovider>
        <main className='app  '>
          {/* <Navbar /> */}
          <Popup1/>
          {children}
          {/* <Footer /> */}
        </main>
        </Authprovider>
    </body>
  </html>
);

export default RootLayout;
