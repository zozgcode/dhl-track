import Image from "next/image";
import dhlLogo from "@/assets/dhl-logo.svg";
import { ChevronDown } from "lucide-react";
export default function Header() {
  return (
    <div>
      <div className="header p-4">
        <div className="mx-auto flex min-h-[35px] max-w-[1150px] items-center">
          <div>
            <Image src={dhlLogo} alt="logo" width={150} height={150} />
          </div>
        </div>
      </div>
      <div className="border bg-white p-4">
        <ul className="mx-auto flex h-7 max-w-[1150px] items-center gap-8 text-sm">
          <li className="flex cursor-pointer items-center gap-1 hover:text-red-500 hover:underline">
            <span>Track</span> <ChevronDown size={21} />
          </li>
          <li className="flex cursor-pointer items-center gap-1 hover:text-red-500 hover:underline">
            <span>Ship</span> <ChevronDown size={21} />
          </li>
        </ul>
      </div>
    </div>
  );
}
