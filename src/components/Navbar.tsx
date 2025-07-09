"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setSignIn, setSignOut } from "@/lib/redux/features/userSlice";
import apiCall from "./helper/apiCall";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const userMail = useAppSelector((state) => state.userReducer.email);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const keepLogin = async () => {
    try {
      const tkn = localStorage.getItem("tkn");
      if (tkn) {
        const res = await apiCall.get(`/accounts/${tkn}`);
        dispatch(setSignIn(res.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    keepLogin();
  }, []);

  const handleSignOut = () => {
    dispatch(setSignOut());
    localStorage.removeItem("tkn");
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-24">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-mutiara-travel.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#profile">Our Profile</Link>
          </li>
          <li>
            <Link href="#service">Our Service</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Artikel</Link>
          </li>
          {userMail ? (
            <li className="flex items-center gap-3">
              <Link href="/my-article">My Article</Link>
              <span className="text-sm font-light text-blue-400">
                {userMail}
              </span>
              <Button
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </li>
          ) : (
            <li className="flex gap-3">
              <Link
                href="/sign-up"
                className="bg-slate-200 px-4 py-1 rounded hover:bg-slate-300"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white w-full px-6 pb-4 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-700">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#profile" onClick={toggleMenu}>
              Our Profile
            </Link>
          </li>
          <li>
            <Link href="#service" onClick={toggleMenu}>
              Our Service
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggleMenu}>
              Artikel
            </Link>
          </li>
          {userMail ? (
            <>
              <li>
                <Link href="/my-article" onClick={toggleMenu}>
                  My Article
                </Link>
              </li>
              <li className="text-sm">{userMail}</li>
              <li>
                <Button onClick={handleSignOut} className="w-full">
                  Sign Out
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/sign-up"
                  className="block text-center bg-slate-200 px-4 py-2 rounded hover:bg-slate-300"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={toggleMenu}
                >
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
