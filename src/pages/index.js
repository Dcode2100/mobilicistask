import Image from "next/image";
import { Inter } from "next/font/google";
import signup from './auth/signup';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative w-[100%]">
      <signup/>
    </main>
  );
}
