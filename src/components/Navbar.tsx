"use client";
import * as React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setSignIn, setSignOut } from "@/lib/redux/features/userSlice";
import { Button } from "@/components/ui/button";
import apiCall from "./helper/apiCall";
import Image from "next/image";

const Navbar: React.FunctionComponent = () => {
  const userMail = useAppSelector((state) => state.userReducer.email);
  const dispatch = useAppDispatch();

  const keepLogin = async () => {
    try {
      const tkn = localStorage.getItem("tkn");
      if (tkn) {
        const res = await apiCall.get(`/accounts/${tkn}`);
        dispatch(setSignIn(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    keepLogin();
  });

  return (
    <div className="flex items-center justify-between px-6 lg:px-24 py-5">
      <div className="logo">
        <Image
          src="/logo-mutiara-travel.png"
          alt="Mutiara Travel Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"#profile"}>Our Profile</Link>
        </li>
        <li>
          <Link href={"#service"}>Our Service</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/blog"}>Artikel</Link>
        </li>
        <li className="flex items-center gap-2">
          {userMail ? (
            <div className="flex gap-2 items-center">
              <Link href="/my-article">My Article</Link>
              <p>{userMail}</p>
              <Button
                type="button"
                onClick={() => {
                  dispatch(setSignOut());
                  localStorage.removeItem("tkn");
                }}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="bg-slate-200 text-slate-700 px-3 py-1 rounded-md shadow"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="bg-slate-700 text-white px-3 py-1 rounded-md shadow"
              >
                Sign In
              </Link>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

// import Image from "next/image";
// import React from "react";
// import apiCall from "./helper/apiCall";
// import { setSignIn } from "@/lib/redux/features/userSlice";
// import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
// import Link from "next/link";

// const Navbar: React.FunctionComponent = () => {
//   const userMail = useAppSelector((state) => state.userReducer.email);
//   const dispatch = useAppDispatch();

//   // ✅ Tambahkan useState untuk toggle menu mobile
//   const [active, setActive] = React.useState(false);

//   // ✅ Fungsi toggle menu
//   const handleClick = () => setActive(!active);

//   const keepLogin = async () => {
//     try {
//       const tkn = localStorage.getItem("tkn");
//       if (tkn) {
//         const res = await apiCall.get(`/accounts/${tkn}`);
//         dispatch(setSignIn(res.data));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   React.useEffect(() => {
//     keepLogin();
//   }, []); // ✅ Tambahkan dependency array agar tidak terpanggil terus-menerus

//   return (
//     <div className="navbar py-6">
//       <div className="container mx-auto px-4">
//         <div className="navbar-box flex items-center justify-between">
//           <div className="logo">
//             <Image
//               src="/logo-mutiara-travel.png"
//               alt="Mutiara Travel Logo"
//               width={120}
//               height={40}
//               className="object-contain"
//             />
//           </div>
//           <ul
//             className={`menu flex items-center gap-12 md:static absolute ${
//               active ? "top-24 opacity-100" : "top-20 opacity-0"
//             } left-1/2 -translate-x-1/2 md:-translate-x-0 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10 text-white md:text-black transition-all md:opacity-100 md:transition-none md:text-base text-xl`}
//           >
//             <li>
//               <Link href={"/"}>Home</Link>
//             </li>
//             <li>
//               <Link href={"#profile"}>Our Profile</Link>
//             </li>
//             <li>
//               <Link href={"#service"}>Our Service</Link>
//             </li>
//             <li>
//               <Link href={"#contact"}>Contact</Link>
//             </li>
//             <li>
//               <Link href={"/sign-in"}>Sign in</Link>
//             </li>
//             <li>
//               <Link href={"/sign-up"}>Sign up</Link>
//             </li>
//           </ul>
//           <div className="md:hidden block" onClick={handleClick}>
//             <i className="ri-menu-3-line ri-2x font-bold"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
