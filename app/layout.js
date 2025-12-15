
import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono } from "next/font/google";
import BootstrapProvider from "./bootstrap-provider";
import Header from "./components/Header/Header";
import "./globals.css";
import ContextProvider from './components/Context-Api/Context-Api';
import Footer from './components/Footer/Footer';
import {ClerkProvider} from '@clerk/nextjs'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fast DFC Food ",
  description: "DFC Fast Food",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ContextProvider>
        <Header/>
        <div className='relative'>
        <BootstrapProvider />
        {children}
        </div>
        <Footer/>
        </ContextProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
