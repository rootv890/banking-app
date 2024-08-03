"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="Menu Icon"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white border-none">
          <Link
            href={"/"}
            className="mb-12 flex cursor-pointer items-center gap-1 px-4 "
          >
            <Image
              src="/icons/logo.svg"
              alt="Horizon Logo"
              width={34}
              height={34}
              //   className="size-[24px] max-xl:size-14"
            />
            <h1 className="text-26 font-ibm-plex-serif font-black text-black-1 ">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((l) => {
                  const isActive =
                    pathname === l.route || pathname.startsWith(l.route);
                  return (
                    <SheetClose asChild key={l.label}>
                      <Link
                        href={l.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={l.imgURL}
                          alt={l.label}
                          //   width={24}
                          //   height={24}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn("font-semibold top-16 text-black-2 ", {
                            "text-white": isActive,
                          })}
                        >
                          {l.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>{" "}
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
