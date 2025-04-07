import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftoff Prep - An Ai Mock Interviewer",
  openGraph: {
    title: "Liftoff Prep - An Ai Mock Interviewer",
    description:
      "Liftoff is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://www.ttnews.com/sites/default/files/styles/article_full_width_image/public/2023-09/iTECH-Dysart-1200.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftoff Prep - An Ai Mock Interviewer",
    description:
      "Liftoff is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://www.ttnews.com/sites/default/files/styles/article_full_width_image/public/2023-09/iTECH-Dysart-1200.jpg"],
    creator: "@aiml krct",
  },
  metadataBase: new URL("https://ai-mock-interview-aiml.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
