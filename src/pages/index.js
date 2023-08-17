import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MyProfile from "@/components/MyProfile";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Sidebar />
      <MyProfile />
    </main>
  );
}
