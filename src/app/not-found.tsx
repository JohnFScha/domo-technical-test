import Link from "next/link"

export default function NotFound() {
  return (
    <main id='not-found' className='flex min-h-screen'>
      <section className="flex flex-col gap-5  min-h-[100%] bg-[#283345] my-auto ml-[11%]">
        <h2 className="text-5xl text-slate-100 font-semibold">Page under construction!</h2>
        <p className="text-lg text-slate-400">We're currently working on building this page. <br /> Please come back later!</p>
        <div className="flex gap-5 mt-3">
          <Link href={'/'} className="btn btn-outline rounded-none">Go back</Link>
        </div>
      </section>
    </main>
  )
}
