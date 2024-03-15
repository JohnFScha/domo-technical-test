import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <section id="home" className="flex items-center max-w-[50%] mr-auto ml-[10%] min-h-[80%] pb-[10%]">
      <article className="flex flex-col gap-5">
        <h2 className="text-5xl text-slate-100 font-semibold">We build beautiful and<br />reliable web solutions</h2>
        <p className="text-lg text-slate-400">We strongly believe that communication, trust and transparency <br /> are the essential elements of successful bussiness relationship. <br /> Ready for the journey?</p>
        <div className="flex gap-5 mt-3">
          <button className="btn btn-outline rounded-none">Learn more</button>
          <button className="btn btn-info text-white bg-[#3871ff] rounded-none">Our projects <IoIosArrowRoundForward /></button>
        </div>
      </article>
    </section>
  )
}
