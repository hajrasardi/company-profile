// src/app/sign-in/page.tsx
"use client"; // HARUS baris pertama!

import * as React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";
import FormInput from "@/components/core/FormInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AccountImage from "../../../public/access_account.svg";
import { apiCall } from "@/components/helper/apiCall";

const SignInPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const onSignIn = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert("Isi semua form");
      return;
    }

    try {
      const res = await apiCall.get("/accounts", {
        params: {
          where: `email = '${email}' AND password = '${password}'`,
        },
      });

      const user = res.data[0];
      dispatch(setSignIn(user));
      localStorage.setItem("tkn", user.objectId);
      alert("Selamat datang");
      router.replace("/");
    } catch (err) {
      alert("Login gagal");
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("tkn")) {
      router.replace("/");
    }
  }, []);

  return (
    <div className="h-screen px-10">
      <div className="container m-auto flex flex-col md:flex-row items-center gap-5 md:gap-16">
        <div className="w-full md:w-1/2 order-2 md:order-1 rounded-2xl px-5 py-8 bg-white">
          <h1 className="text-2xl">Sign in</h1>
          <div className="py-6 space-y-5">
            <FormInput name="email" type="text" label="Email" ref={emailRef} />
            <FormInput
              name="password"
              type="password"
              label="Password"
              ref={passwordRef}
            />
            <div className="flex items-center justify-end gap-4">
              <Button
                className="bg-slate-700 text-white px-4 py-2 shadow"
                onClick={onSignIn}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center space-y-5">
          <h1 className="text-3xl font-bold">Post your story</h1>
          <p className="text-2xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="hidden md:block">
            <Image
              src={AccountImage}
              alt="account"
              width={350}
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
