import { MdHtml } from "react-icons/md";
import { IoLogoHtml5 } from "react-icons/io5";
import { MdCss } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export default function Technology() {
  return (
    <section id="technologies" className="flex bg-[#3871ff] justify-between items-center px-[10%] m-auto FHD:min-h-[70%] HD-1:min-h-[100%] IOS:max-h-[60%] IOS:pt-[5%] HD-1:pt-[20%] z-0">
      <article className="flex flex-col gap-5 w-4/6">
        <h2 className="text-4xl text-slate-100 font-medium">We use cutting edge technology</h2>
        <p className="w-4/6 text-xl text-[#9ab7ff] leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam, accusantium ut ullam laudantium magni illo dolorem sed dicta vero iure nobis architecto, minima error consequatur quisquam, est modi consectetur. Magnam, suscipit dignissimos. Quia eius, temporibus dolorem tempora in placeat mollitia?</p>
      </article>
      <article className="grid grid-cols-2 gap-14 mx-auto text-white">
        <div className="flex flex-col gap-10 text-7xl">
          <div className="flex flex-col gap-0">
            <MdHtml className="text-4xl m-auto" />
            <IoLogoHtml5 />
          </div>
          <FaSass />
          <FaAngular />
        </div>
        <div className="flex flex-col gap-10 text-7xl">
          <div className="flex flex-col">
            <MdCss className="text-4xl m-auto" />
            <IoLogoCss3 />
          </div>
          <GrNode />
          <FaPython />
        </div>
      </article>
    </section>
  )
}
