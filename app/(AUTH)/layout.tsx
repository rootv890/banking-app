import Image from "next/image";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src={"/icons/auth-image.svg"}
            width={500}
            height={500}
            alt="
          Login Screen"
          />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
