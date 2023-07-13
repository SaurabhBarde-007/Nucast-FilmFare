import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/homebg.module.css";
import { motion } from "framer-motion";
import Landing from "@/components/Landing"
import Companies from "@/components/Companies"
import Offers from "@/components/Offers"
import ConnectUs from "@/components/ConnectUs"

import { buttonAnim, fadeIn } from "../motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="w-[100vw] h-auto overflow-hidden"> 
        <Landing/>
        <Companies/>
        <Offers/>
        <ConnectUs/>
      </main>
        
    </>
  );
}
