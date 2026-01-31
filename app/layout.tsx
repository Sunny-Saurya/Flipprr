
import "./globals.css";
import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
// const dmSans = DM_Sans({ 
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700"],
//     variable: "--font-dm-sans"
// });

export const metadata: Metadata = {
    title: "Flippr - Free Unlimited File Converter",
    description: `Unleash your creativity with Flippr – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
    creator: "Sunny Kumar.",
    keywords: "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
            <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="min-h-screen">
                        {children}
                    </div>
                    
                <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
