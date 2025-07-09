"use client";
import Image from "next/image";
import DataImage from "@/app/data";
import * as motion from "motion/react-client";

export default function ProfileSection() {
  return (
    <section id="profile" className="mt-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid gap-y-10 gap-x-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {/* Deskripsi Utama */}
        <div className="col-span-full w-full shadow-2xl p-8 rounded-2xl bg-white">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Profile
          </h1>
          <div className="pt-6 text-gray-700 text-justify leading-relaxed space-y-4">
            <p>Sekapur sirih.</p>
            <p>Bismillahirrahmaanirrahiim</p>
            <p>Assalammualaikum Warahmatullahi Wabarakatuh.</p>
            <p>Bersyukur kami panjatkan kepada Allah SWT.</p>
            <p>
              Atas izin Allah SWT,beserta rekan dan kerabat juga didukung
              pelanggan setia yang telah menggunakan jasa kami. CV. Mutia Car
              Rent (MCR) kini hadir dengan layanan travel jurusan Pekanbaru –
              Dumai (MUTIARA TRAVEL) dengan Armada New Kijang Innova.
            </p>
            <p>
              MUTIARA TRAVEL hadir seiring tingginya tingkat kebutuhan
              masyarakat saat ini dalam memerlukan sarana penunjang transportasi
              perjalanan,kami hadir untuk membantu, memfasilitasi, serta
              mencarikan solusi terbaik kepada masyarakat dalam merencanakan
              perjalanan yang direncanakan sehingga perjalanan tersebut menjadi
              nyaman, aman, dan mendapatkan nilai kesan yang baik dalam setiap
              perjalanan.di samping itu kami juga mempunyai visi dan misi
              sebagai berikut:
            </p>
            <h3>Visi :</h3>
            <p>
              Menjadikan Perusahaan Jasa Transportasi yang Handal Dengan
              Mengutamakan Layananan Berkualitas Kepada Pelanggan.
            </p>
            <h3>Misi</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Menjadi Perusahaan Penyedia Transportasi Dengan Kualitas Layanan
                Prima
              </li>
              <li>
                Menjadi Perusahaan yang Selalu Memberikan Kenyamanan, Keamanan
                Penumpang yang akan Melakukan Perjalanan.
              </li>
              <li>
                Mengedepankan Kepuasan, Menggaransi Uang Pembelian Tiket Kembali
                Apabila Terjadi Kelalaian Kami
              </li>
            </ol>
            <p>
              Kami sangat mengharapkan kerjasama yang sudah terjalin tetap
              terjaga dengan baik dan lebih meninggkat di masa mendatang,Melalui
              ini kami berharap dapat memudahkan Anda untuk mendapatkan
              informasi yang lengkap mengenai layanan dan travel yang kami
              miliki.
            </p>
            <p>
              Berikut beberapa perusahaan/Instansi yang telah menggunakan jasa
              kami:
            </p>
          </div>
          <Image
            src={DataImage.Relation}
            alt="Relasi Kami"
            className="mx-auto mt-6 max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Fitur 1-3 */}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-xl p-6 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <i className={`${icon} ri-3x text-blue-600 mb-4`} />
            <p className="font-semibold text-xl mb-2 text-slate-800">{title}</p>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              nam culpa ex ullam dolore dolor.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
