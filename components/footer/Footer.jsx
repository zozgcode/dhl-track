import React from "react";
import footerLogo from "@/assets/glo-footer-logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-4">
      <div className="mx-auto mt-10 flex flex-col gap-5 sm:flex-row max-w-[1150px] items-center justify-between">
        <div>
          <Image width={150} height={150} src={footerLogo} alt="fLogo" />
        </div>
        <p className="text-sm">2023 © - all rights reserved</p>
      </div>
    </div>
  );
}
