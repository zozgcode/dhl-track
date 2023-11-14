import { TrackingShippingInfo2 } from "@/utils/shippingInfo";
import TimeLine2 from "./TimeLine2";

export default function TrackNo2({ inputValue }) {
  return (
    <div>
      <div className="rounded-lg border p-4 md:p-8">
        <TimeLine2 />
        <div>
          <div className="mt-[10px] flex gap-3 p-4 pl-0 font-semibold">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Sender&apos;s Information</span>
          </div>
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-[#858585] text-xs uppercase text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Sender Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border bg-white text-[#333333]">
                    <td className="w-[200px] px-4 py-2">Ashley Jessica</td>
                    <td className="w-[200px] px-4 py-2">******</td>
                    <td className="w-[300px] px-4 py-2">
                      2604 PITKIN LANE NW HUNTSVILLE, AL 35810
                    </td>
                    <td className="w-[200px] px-4 py-2">*****</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="mt-[10px] flex gap-3 p-4 pl-0 font-semibold">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Receiver&apos;s Information</span>
          </div>
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-[#858585] text-xs uppercase text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Receiver Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border bg-white text-[#333333]">
                    <td className="w-[200px] px-4 py-2">Denis Burgess</td>
                    <td className="w-[200px] px-4 py-2">*****</td>
                    <td className="w-[300px] px-4 py-2">
                      962 OLD STAGE RD CENTERVILLE, MA 02632
                    </td>
                    <td className="w-[200px] px-4 py-2">*****</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-[30px] flex gap-3 p-4 pl-0 font-semibold">
            <span>
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            </span>
            <span> Shipment Information</span>
          </div>
          <div>
            {TrackingShippingInfo2.map((itemInfo, i) => (
              <div
                className={`flex ${
                  itemInfo.bgChange ? "bg-gray-100" : "bg-[#858585] text-white"
                }`}
                key={i}
              >
                <div className="w-full border-r p-2">{itemInfo.title}</div>
                <div className="w-full p-2">
                  {itemInfo.content}
                  {itemInfo.trackingNumber && inputValue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
