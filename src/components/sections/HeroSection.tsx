"use client";
import Image from "next/image";
import DataImage from "@/app/data";
import HeroInfo from "@/components/HeroInfo";
import * as motion from "motion/react-client";

export default function HeroSection() {
  return (
    <>
      <motion.div
        className="py-20"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        id="beranda"
      >
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">
          "Driving Your Journey, <br /> Delivering Comfort"
        </h1>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src={DataImage.Hero} alt="Hero Image" priority />
        </motion.div>

        <HeroInfo />
      </div>
    </>
  );
}
