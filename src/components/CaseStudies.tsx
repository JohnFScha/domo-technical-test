import Image from "next/image"
import phone from '../assets/smarthphone.png'
import Link from "next/link"

function CaseOne() {
  return (
      <article className="card w-[35%] bg-[#3871FF] text-white absolute FHD:top-[271%] HD-1:top-[295%] left-[10%] rounded-none p-5">
        <div className="card-body gap-5">
          <h2 className="card-title text-3xl">Get in touch with us</h2>
          <p className="w-[50%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="card-actions justify-start">
            <Link href={'/hire-us'} className="btn btn-outline rounded-none border-white text-white">Hire us</Link>
          </div>
        </div>
      </article>
  )
}

function CaseTwo() {
  return (
      <article className="card w-[35%] bg-[#3871FF] text-white absolute FHD:top-[271%] HD-1:top-[295%] right-[10%] rounded-none grid grid-cols-3 IOS:h-[33%] FHD:h-auto">
        <div className="card-body gap-6 p-12 col-span-2">
          <h2 className="card-title text-3xl">Our projects</h2>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="card-actions justify-start">
            <Link href={'/hire-us'} className="btn btn-outline rounded-none border-white text-white">Hire us</Link>
          </div>
        </div>
        <div className="FHD:h-[277px] overflow-hidden">
          <Image
            src={phone}
            alt="Iphone"
            width={500}
            height={500}
            className="HD-1:h-full object-cover relative bottom-[-60px]"
          />
        </div>
      </article>
  )
}

export {CaseOne, CaseTwo}