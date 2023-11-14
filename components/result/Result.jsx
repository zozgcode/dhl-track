import Image from "next/image";
import React from "react";
import dhlLogo from "@/assets/dhl-logo.svg";
import TrackNo2 from "./TrackingNumbers/TrackNo143016/TrackNo2";

export default function Result({ trackingResult }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-30 h-full w-full overflow-auto bg-white">
      <div className="mx-auto max-w-[1000px] pt-10">
        <div className="flex items-center px-4 justify-between">
            <a href="/">
            <Image src={dhlLogo} width={150} height={150} alt="logo" />
            </a>
          <a href="/" className="font-bold text-sky-900 hover:underline">
            Close X
          </a>
        </div>
        <div className="mb-[30px] mt-[30px] bg-[#858585] p-4 text-center font-semibold text-white">
          Product Tracking number: {trackingResult.number} found.
        </div>
        {trackingResult && trackingResult.id === 1 && <TrackNo2 />}
      </div>
    </div>
  );
}
