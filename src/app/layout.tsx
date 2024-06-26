import "@/styles/globals.css";
import { Metadata,  } from "next";
import Script from "next/script";
import { title } from "process";

export const metadata :Metadata={
    title: "countdowns",
    description: "Make beautiful countdowns and share them with your friends!",
    metadataBase: new URL("https://countdown-life.vercel.app"),
    icons: ["/favicon.png"],
    openGraph: {
      type: "website",
      url: "https://countdown-life.vercel.app",
      siteName: "countdown",
    },
    twitter: {
      creator: "@SagarHarsora13",
      site: "@sagarrh",
      card: "summary_large_image",
    },
};

export default function Rootlayout({
    children,
}:{
    children:React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
    )
}

