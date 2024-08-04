"use client";
import { logOutAccount } from "@/lib/actions/user.actions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type }: FooterProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    const loggedOut = await logOutAccount();
    if (loggedOut) {
      router.push("/sign-in");
    }
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-gray-700  ">{user.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate  text-gray-700 font-semibold">
          {user.name}
        </h1>
        <p className="text-14 turncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div className="footer_image">
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;

// Stopped  at 3:16:47
