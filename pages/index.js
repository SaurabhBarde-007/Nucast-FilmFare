import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/homebg.module.css";
import { motion } from "framer-motion";
import Landing from "@/components/Landing"
import Companies from "@/components/Companies"
import Offers from "@/components/Offers"
import ConnectUs from "@/components/ConnectUs"
import OurWork from "@/components/OurWork"
import CommingSoon from "@/components/CommingSoon"
import Discuss from "@/components/Discuss"
import Footer from "@/components/Footer"

import { buttonAnim, fadeIn } from "../motion";
import CustomerFeedback from "@/components/CustomerFeedback";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="w-[100vw] h-auto overflow-hidden">
        <Landing />
        <Companies />
        <Offers />
        <ConnectUs />
        <OurWork />
        <CustomerFeedback/>
        <Discuss />
        <Footer/>

        {/* <CommingSoon/> */}
      </main>
    </>
  );
}
