import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdHome } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

import { BsLightningCharge } from "react-icons/bs";
import { IoRocket } from "react-icons/io5";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdHome id="wd-ai-icon-1" className="text-4xl text-blue-600" />
        <HiAcademicCap id="wd-ai-icon-2" className="text-4xl text-blue-600" />

        <IoRocket id="wd-my-icon-1" className="text-5xl text-red-500" />
        <BsLightningCharge
          id="wd-my-icon-2"
          className="text-5xl text-green-600"
        />
      </div>
    </div>
  );
}
