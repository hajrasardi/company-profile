"use client";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="bg-white shadow-xl rounded-2xl p-8 grid md:grid-cols-2 grid-cols-1 gap-12">
        {/* Kiri: Formulir */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama anda"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                rows={4}
                placeholder="Tulis pesan anda..."
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Kanan: Google Map + Social Media */}
        <div className="flex flex-col gap-6">
          {/* Google Maps */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.661886239692!2d101.43230611162566!3d0.5073739994855244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aff6d0024023%3A0x4627608d6ca73bc7!2sCV.%20Mutiara%20Travel%20Pekanbaru%20Dumai!5e0!3m2!1sid!2sid!4v1752020229189!5m2!1sid!2sid"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            />
          </div>

          {/* Follow Us */}
          <h3 className="text-2xl font-semibold text-slate-700">Follow Us</h3>
          <div className="flex gap-6 text-gray-700">
            <Link href="https://wa.me/6282387100688" target="_blank">
              <i className="ri-whatsapp-fill ri-3x hover:text-green-500 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <i className="ri-instagram-fill ri-3x hover:text-pink-500 transition" />
            </Link>
            <Link href="https://tiktok.com" target="_blank">
              <i className="ri-tiktok-fill ri-3x hover:text-black transition" />
            </Link>
          </div>

          {/* Informasi Kontak */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              Alamat: Jl. Angsa I No.14, Kp. Melayu, Kec. Sukajadi, Kota
              Pekanbaru, Riau 28121
            </p>
            <p>Email: info@mutiaratravel.com</p>
            <p>Telp: +62-823-8710-0688</p>
          </div>
        </div>
      </div>
    </section>
  );
}
