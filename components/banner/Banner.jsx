"use client";

import { trackingNumbersData } from "@/utils/trackingNumbersData";
import { Button, Input, Spinner } from "@nextui-org/react";
import React, { useState } from "react";
import Result from "../result/Result";

export default function Banner() {
  const [inputValue, setInputValue] = useState("");
  const [trackingResult, setTrackingResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [resultStatus, setResultStatus] = useState("not-found");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setResultStatus(null);
  };

  const handleTrackButtonClick = () => {
    setLoading(true);
    // Simulate an asynchronous operation (e.g., API call)
    if (!inputValue) {
      alert("Tracking number is required");
      setLoading(false);
    }
    setTimeout(() => {
      // Find a matching tracking number in the data
      const result = trackingNumbersData.find(
        (tracking) => tracking.number === inputValue,
      );

      // Set the result in the state
      setTrackingResult(result || {}); // Use an empty object if result is falsy

      // Set the result status based on whether a result was found
      setResultStatus(result ? "found" : "not-found");

      setLoading(false);
    }, 2000); // Simulating a delay, replace with your actual asynchronous operation
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
              className={`rounded-r-1 absolute right-[1px] top-[2px] h-[56px] rounded-l-sm bg-red-500 text-base font-semibold text-white
              ${loading ? "cursor-not-allowed" : "cursor-pointer"}
              `}
              onClick={handleTrackButtonClick}
              isDisabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-1">
                  <span>Loading...</span>
                  <Spinner color="default" labelColor="foreground" />
                </div>
              ) : (
                "Track"
              )}
            </Button>
          </div>
        </div>
      </div>
      {loading ? (
        <p></p>
      ) : resultStatus === "found" ? (
        <Result trackingResult={trackingResult} />
      ) : resultStatus === "not-found" && inputValue.trim() !== "" ? (
        <div className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black/50 p-[16px]">
          <div className="custom_container border bg-white p-[40px] pb-[50px] pt-[50px] text-[20px]">
            <div className="text-center">
              Tracking number {inputValue && <span>[ {inputValue} ]</span>} not
              found. check the number and try again!
            </div>
            <div className="mx-auto mt-[40px] max-w-[250px] border">
              <a
                href="/"
                className="block w-full  bg-[#D40511] p-4 pl-6 pr-6 text-center text-[14px] font-semibold uppercase text-white"
              >
                TRY AGAIN!
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
