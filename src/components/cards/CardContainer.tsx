import Link from "next/link"
import cards from "./Card"

export default function CardContainer() {
  return (
    <article role="contentinfo" className="flex justify-center gap-10 absolute FHD:top-[115%] HD-2:top-[110%] SXGA:top-[110%] WXGA-2:top-[115%]">
        {cards.map(data => (
          <div key={data.id} role="presentation" className="card bg-white rounded-none items-center w-[25%] px-5 py-9 gap-7 overflow-visible z-10">
            <div className="rounded-full bg-[#3871ff] shadow-md shadow-slate-400 p-4">
              {data.icon}
            </div>
            <div className="flex flex-col items-center gap-5">
              <h2 className="font-semibold text-black text-lg">{data.title}</h2>
              <p className="text-center font-semibold leading-8">{data.text}</p>
              <Link href={'/jobs'} className="btn btn-outline rounded none">Learn more</Link>
            </div>
          </div>))}
      </article>
  )
}
