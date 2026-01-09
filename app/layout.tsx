import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/lib/auth-context";
import { MainLayout } from "@/components/layout/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DCA Management Platform",
    description: "Enterprise Debt Collection Agency Management",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(inter.className, "bg-background text-foreground antialiased overflow-hidden")}>
                <AuthProvider>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </AuthProvider>
            </body>
        </html>
    );
}
