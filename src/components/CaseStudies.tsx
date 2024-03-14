import Image from "next/image"
import phone from '../assets/smarthphone.png'

function CaseOne() {
  return (
      <article className="card w-[35%] bg-[#3871FF] text-white absolute top-[310%] left-[10%] rounded-none p-5">
        <div className="card-body gap-5">
          <h2 className="card-title text-3xl">Get in touch with us</h2>
          <p className="w-[50%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline rounded-none border-white text-white">Hire us</button>
          </div>
        </div>
      </article>
  )
}

function CaseTwo() {
  return (
      <article className="card w-[35%] bg-[#3871FF] text-white absolute top-[310%] right-[10%] rounded-none grid grid-cols-2">
        <div className="card-body gap-6 p-12">
          <h2 className="card-title text-3xl">Our projects</h2>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline rounded-none border-white text-white">Hire us</button>
          </div>
        </div>
        <div className="h-[276px] overflow-hidden">
          <Image
            src={phone}
            alt="Iphone"
            width={500}
            height={500}
          />
        </div>
      </article>
  )
}

export {CaseOne, CaseTwo}