import SliderComponent from "./SliderComponent"

export default function Client() {
  return (
    <section id='clients' className='flex flex-col items-center justify-center gap-10 text-[#b2b2b2] bg-white FHD:min-h-[70%] HD-1:min-h-[80%] p-10'>
      <h2 className='text-sm font-bold'>CLIENTS WE WORK WITH</h2>
      <SliderComponent />
    </section>
  )
}
