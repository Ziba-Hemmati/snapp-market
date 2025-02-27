import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hyper-Snapp-Makert",
    description: "Remake of hyper snapp market",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <html lang="fa" dir="rtl">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header/>
        <div className="max-w-7xl mx-auto my-8">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
