import "./globals.css";
import { Inter } from "next/font/google";

import { ClerkProvider, auth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { ThemeProvider } from "@/components/ui/themeProvider";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "A threads clone build with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {" "}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {userId ? (
              <>
                <main className="w-screen flex justify-center bg-neutral-950">
                  {/* <Nav /> */}
                  <div className="min-h-screen text-base w-full max-w-[500px] bg-neutral-950 relative pb-14">
                    {children}
                  </div>
                </main>
                <Toaster />
              </>
            ) : (
              <main className="w-screen flex justify-center bg-neutral-950">
                <div className="min-h-screen flex flex-col justify-center items-center text-base w-full max-w-[500px] bg-neutral-950 relative">
                  {children}
                </div>
              </main>
            )}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
