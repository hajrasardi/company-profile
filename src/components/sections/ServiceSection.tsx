"use client";
import Image from "next/image";
import DataImage from "@/app/data";
import * as motion from "motion/react-client";
import Link from "next/link";

const services = [
  "Travel Pekanbaru-Dumai dengan harga Rp. 150.000,- dan ",
  "Travel Pekanbar-Duri dengan harga Rp. 140.000,- dan ",
  "Travel Pekanbaru-Kandis dengan harga Rp. 130.000,- dan ",
  "Travel Kandis-Pekanbaru dengan harga Rp. 130.000,- dan ",
  "Travel Duri-Pekanbaru dengan harga Rp. 140.000,- dan ",
  "Travel Dumai-Pekanbaru dengan harga Rp. 150.000,- dan",
];

export default function ServiceSection() {
  return (
    <div className="mt-32" id="service">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl/normal text-center font-semibold"
      >
        Our Service
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-base/loose text-center"
      >
        Kami menyediakan berbagai layanan travel antar kota.
      </motion.p>

      <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {services.map((title, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="shadow-2xl p-4 rounded-2xl"
          >
            <Image
              src={DataImage.Produk}
              alt="Service"
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <h1 className="mt-6 text-2xl font-semibold">{title}</h1>
            <p className="text-base/loose">
              Kami siap melayani rute {title} dengan kenyamanan maksimal.
            </p>
            <div className="mt-6 mb-3">
              <Link
                href="https://wa.me/6282387100688"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
