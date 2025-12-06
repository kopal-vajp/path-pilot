// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import Header from "@/components/header";
// import { ClerkProvider } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";

// const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "PathPilot - AI Career Coach",
//   description: "",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
  
//   return (
//     <ClerkProvider appearance={{
//       baseTheme:dark,
//     }}>
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${inter.className}` }
//       >
//       <ThemeProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
            
//             <Header />
//             <main className="min-h-screen">{children}</main>
           
//             <footer className="bg-muted/50 py-12">
//               <div className="container mx-auto px-4 text-center text-gray-200">
//                 <p>
//                   Made with ❤️ by Kopal</p>
//               </div>
//             </footer>
//           </ThemeProvider>
//       </body>
//     </html>
//     </ClerkProvider>
//   );
// }

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PathPilot - AI Career Coach",
  description: "",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Kopal</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

