import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import {ToastContainer} from "react-toastify";
import {ClerkProvider} from "@clerk/nextjs"


const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
   <ClerkProvider>
    <html lang="en">
      <body className={montserrat.className}>
       
        {children}
        <ToastContainer/>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
