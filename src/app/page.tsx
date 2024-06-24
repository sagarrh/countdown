"use client";

import Background from "../components/background/Background";
import { CountdownProvider } from "../hooks/CountdownContext";



export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
        <CountdownProvider
        <Background />
        <Countdown />
        <Settings />
        <DonateButton />
        <GitHubButton />
        <ShareButton />

      </CountdownProvider>
    </main>
  );
}
