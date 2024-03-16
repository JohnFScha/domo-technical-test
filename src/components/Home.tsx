import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <section id="home" className="flex items-center max-w-[50%] mr-auto ml-[11%] FHD:min-h-[80%] HD-1:min-h-[72%] pb-[10%] bg-[#283345]">
      <article className="flex flex-col gap-5">
        <h2 className="text-5xl text-slate-100 font-semibold">We build beautiful and<br />reliable web solutions</h2>
        <p className="text-lg text-slate-400">We strongly believe that communication, trust and transparency <br /> are the essential elements of successful bussiness relationship. <br /> Ready for the journey?</p>
        <div className="flex gap-5 mt-3">
          <Link href={'#about'} scroll={false} replace={true} prefetch={false} className="btn btn-outline rounded-none">Learn more</Link>
          <Link href={"/jobs"} className="btn btn-info text-white bg-[#3871ff] rounded-none">Our projects <IoIosArrowRoundForward /></Link>
        </div>
      </article>
    </section>
  )
}
