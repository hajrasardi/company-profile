"use client";
import Image from "next/image";
import DataImage from "@/app/data";
import * as motion from "motion/react-client";

export default function ProfileSection() {
  return (
    <div
      className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1"
      id="profile"
    >
      <div className="col-span-3 w-full shadow-2xl p-7 rounded-2xl">
        <h1 className="text-3xl font-semibold">Our Profile</h1>
        <p className="pt-5">Sekapur sirih.</p>
        <br />
        <p>Bismillahirrahmaanirrahiim</p>
        <br />
        <p>Assalammualaikum Warahmatullahi Wabarakatuh.</p>
        <br />
        <p>
          Bersyukur kami panjatkan kepada allah swt [...] <br />
          (potong untuk ringkas)
        </p>
        <Image
          src={DataImage.Relation}
          alt="Relasi Kami"
          className="mx-auto block mt-4"
        />
      </div>

      {[
        {
          icon: "ri-money-dollar-circle-fill",
          title: "Memberikan Harga Terbaik",
        },
        {
          icon: "ri-service-fill",
          title: "Memberikan Pelayanan Terbaik",
          delay: 0.3,
        },
        {
          icon: "ri-star-s-fill",
          title: "Memberikan Fasilitas Terbaik",
          delay: 0.6,
        },
      ].map(({ icon, title, delay = 0 }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay }}
          viewport={{ once: true }}
          className="shadow-2xl p-7 rounded-2xl"
        >
          <i className={`${icon} ri-3x text-slate-700`} />
          <p className="font-semibold text-2xl/normal mb-2">{title}</p>
          <p className="text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam
            culpa ex ullam dolore dolor?
          </p>
        </motion.div>
      ))}
    </div>
  );
}
