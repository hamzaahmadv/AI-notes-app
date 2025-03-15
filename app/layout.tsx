import { getProfileByUserIdAction } from "@/actions/profiles-actions";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/utilities/providers";
import { createProfile } from "@/db/queries/profiles-queries";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description: "A full-stack template for a notes app."
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (userId) {
    try {
      const res = await getProfileByUserIdAction(userId);
      if (!res.data) {
        console.log(`No profile found for user ${userId}, creating new profile...`);
        await createProfile({ userId });
      }
    } catch (error) {
      // Log the error but don't fail the rendering
      console.error("Error handling user profile:", error);
      // We'll continue rendering the app even if profile creation fails
    }
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
