import CardContainer from "./cards/CardContainer"

export default function Services() {
  return (
    <section id="services" className="flex flex-col gap-10 items-center bg-[#283345]">
      <article role="banner" className="flex flex-col gap-3 items-center h-[50vh]">
        <h2 className="text-4xl text-slate-100 font-semibold">Our services</h2>
        <p className="text-lg text-slate-400 text-center font-medium">We feel very strongly about our skills when it comes to planning, designing <br /> and coding applications. here is what we love to do!</p>
      </article>
      <CardContainer />
    </section>
  )
}
