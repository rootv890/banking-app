import React from "react";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const loggedIn = {
    firstName: "Pruthviraj",
    lastName: "JSM",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full  flex-col ">
        <div className="root-layout">
          <Image
            src={"/icons/logo.svg"}
            width={30}
            height={30}
            alt="Menu Icon"
          />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
