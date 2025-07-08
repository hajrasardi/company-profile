"use client";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div
      className="mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4"
      id="contact"
    >
      <h2 className="text-3xl font-bold">Logo</h2>
      <div className="flex gap-10">
        <Link href="#beranda">Home</Link>
        <Link href="#service">Layanan</Link>
        <Link href="#profile">Profil</Link>
      </div>
      <div className="flex gap-4">
        {["youtube", "instagram", "reddit", "whatsapp"].map((platform) => (
          <Link href="#" key={platform}>
            <i className={`ri-${platform}-fill ri-2x`} />
          </Link>
        ))}
      </div>
    </div>
  );
}
