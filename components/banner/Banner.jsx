"use client";

import { trackingNumbersData } from "@/utils/trackingNumbersData";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import Result from "../result/Result";

export default function Banner() {
  const [inputValue, setInputValue] = useState("");
  const [trackingResult, setTrackingResult] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTrackButtonClick = () => {
    // Find a matching tracking number in the data
    const result = trackingNumbersData.find(
      (tracking) => tracking.number === inputValue,
    );

    // Set the result in the state
    setTrackingResult(result || {}); // Use an empty object if result is falsy
  };
  return (
    <div>
      <div className="banner relative min-h-[430px] bg-[url('https://i.imgur.com/jofFXEI.jpg')] bg-cover bg-no-repeat bg-blend-lighten">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-black/30"></div>
        <div className="relative z-20 mx-auto max-w-[550px] p-4 pt-20">
          <p className="text-3xl font-bold text-white drop-shadow-lg">
            Track Your Shipment
          </p>
          <div className="relative mt-5">
            <Input
              type="text"
              label="Enter your tracking number(s)"
              variant="bordered"
              value={inputValue}
              onChange={handleInputChange}
              classNames={{
                inputWrapper:
                  "bg-white h-[60px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
                innerWrapper:
                  "h-[60px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
                label: "mb-3",
                input:
                  "outline-none text-base border-none h-[60px] pt-[10px] pr-[75px]",
              }}
            />
            <Button
              className="rounded-r-1 absolute right-[1px] top-[2px] h-[56px] rounded-l-sm bg-red-500 text-base font-semibold text-white"
              onClick={handleTrackButtonClick}
            >
              Track
            </Button>
          </div>
        </div>
      </div>
      {trackingResult.id ? (
        <Result trackingResult={trackingResult} />
      ) : null}
    </div>
  );
}
