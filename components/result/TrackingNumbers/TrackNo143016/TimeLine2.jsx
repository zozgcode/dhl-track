export default function TimeLine2() {
  return (
    <div className="mb-20">
      <div style={{ marginLeft: 10 }}>
        <div className="wrapper px-3 sm:px-0">
          <ul className="StepProgress">
            <div className="StepProgress-item is-done">
              <div className="ml-5">
                <h3 className="mb-1 flex items-center text-[16px] font-semibold text-[#333333]">
                  PACKAGE RECEIVED BY DHL
                </h3>
                <p className="mb-1 flex items-center text-sm font-semibold text-[#808080]">
                  Boston, MA. US
                </p>
                <time className="mb-2 block text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  November 14, 2023
                </time>
              </div>
            </div>
            <div className="StepProgress-item is-done">
              <div className="ml-5">
                <h3 className="mb-1 flex items-center text-[16px] font-semibold text-[#333333]">
                  IN TRANSIT
                </h3>
                <p className="mb-1 flex items-center text-sm font-semibold text-[#808080]">
                  San Francisco, CA
                </p>
                <time className="mb-2 block text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  November 14, 2023
                </time>
              </div>
            </div>
            <div className="StepProgress-item current">
              <div className="ml-5 h-[70px]">
                <h3 className="mb-1 flex items-center text-[16px] font-semibold text-[#333333]">
                  OUT FOR DELIVERY
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                    San Francisco, CA
                  </p>
                  <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                    October 8th, 2023
                  </time> */}
              </div>
            </div>
            <div className="StepProgress-item current">
              <div className="ml-5">
                <h3 className="mb-1 flex items-center text-[16px] font-semibold text-[#333333]">
                  DELIVERED
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  Christopher Knollenberg
                </p>
                <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  49 Bentwood Ln Aliso Viejo CA 92656
                </p> */}
                {/* <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  October 28, 2023
                </time> */}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
