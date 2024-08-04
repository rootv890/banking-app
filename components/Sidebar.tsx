"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar  ">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 flex cursor-pointer items-center gap-2 "
        >
          <Image
            src="/icons/logo.svg"
            alt="Horizon Logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((l) => {
          const isActive = pathname === l.route || pathname.startsWith(l.route);
          return (
            <Link
              href={l.route}
              key={l.label}
              className={cn("sidebar-link ", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6 w-fit flex items-center justify-start gap-6">
                <Image
                  src={l.imgURL}
                  alt={l.label}
                  width={14}
                  height={14}
                  priority
                  className={cn("flex-1", {
                    "brightness-[3] invert-0": isActive,
                  })}
                />
                <p
                  className={cn("sidebar-label ", {
                    "!text-white": isActive,
                  })}
                >
                  {l.label}
                </p>
              </div>
            </Link>
          );
        })}
        USER
      </nav>
      <Footer user={user} type="desktop" />
    </section>
  );
};

export default Sidebar;
