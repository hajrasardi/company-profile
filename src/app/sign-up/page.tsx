"use client";
import * as React from "react";
import Image from "next/image";
import AccountImage from "../../../public/access_account.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FormInput from "@/components/core/FormInput";
import { useRouter } from "next/navigation";
import { apiCall } from "@/components/helper/apiCall";

const SignUpPage: React.FunctionComponent = () => {
  const router = useRouter();

  const usernameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confPasswordRef = React.useRef<HTMLInputElement>(null);

  const onSignUp = async () => {
    const username = usernameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const password = passwordRef.current?.value || "";
    const confPassword = confPasswordRef.current?.value || "";

    // Validasi umum
    if (!username || !email || !password || !confPassword) {
      alert("Semua form harus diisi");
      return;
    }

    // Validasi email sederhana
    if (!email.includes("@")) {
      alert("Email tidak valid");
      return;
    }

    // Password match dan panjang minimal
    if (password.length < 6) {
      alert("Password minimal 6 karakter");
      return;
    }

    if (password !== confPassword) {
      alert("Password dan konfirmasi tidak cocok");
      return;
    }

    try {
      const response = await apiCall.post("/accounts", {
        username,
        email,
        password,
      });

      console.log("SignUp response:", response.data);
      alert("Pendaftaran akun berhasil!");
      router.push("/sign-in");
    } catch (error: any) {
      console.error("Signup error:", error);
      alert("Gagal mendaftar akun. Periksa kembali data Anda.");
    }
  };

  return (
    <div className="h-screen px-10">
      <div className="container m-auto flex flex-col md:flex-row items-center gap-5 md:gap-16">
        {/* Kiri */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:space-y-5 order-2 md:order-1">
          <h1 className="text-3xl font-bold">Post your story</h1>
          <p className="text-2xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="hidden md:block space-y-5">
            <Image
              src={AccountImage}
              alt="Register Illustration"
              width={350}
              className="m-auto"
              priority
            />
          </div>
        </div>

        {/* Kanan */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Card>
            <CardHeader>
              <h1 className="text-2xl font-semibold">Sign up now</h1>
            </CardHeader>
            <CardContent>
              <form>
                <div className="py-2 md:py-6 space-y-5">
                  <FormInput
                    type="text"
                    name="username"
                    label="Username"
                    ref={usernameRef}
                  />
                  <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    ref={emailRef}
                  />
                  <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    ref={passwordRef}
                  />
                  <FormInput
                    type="password"
                    name="confPassword"
                    label="Confirmation Password"
                    ref={confPasswordRef}
                  />
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className="text-xs cursor-pointer hover:text-blue-600"
                      onClick={() => router.push("/sign-in")}
                    >
                      Sudah punya akun?
                    </p>
                    <Button
                      type="button"
                      className="bg-slate-700 text-white px-4 py-2 text-sm shadow hover:bg-slate-600"
                      onClick={onSignUp}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
