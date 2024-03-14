import { FaTwitter } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-[#283345] text-base-content static bottom-0 min-h-[50%] px-[10%] pt-[15%]">
      <aside className="flex flex-col gap-4">
        <h2 className="font-semibold text-white">compleet labs</h2>
        <p className="leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis fugiat qui amet? <br />Tenetur delectus ad tempore veniam amet recusandae eius blanditiis, <br /> modi eveniet, autem, maxime placeat quos! Ratione, sapiente odio?</p>
        <section className="flex gap-2">
          <FaTwitter />
          <TfiWorld />
          <IoLogoFacebook />
          <FaInstagram />
        </section>
      </aside>
      <nav>
        <h6 className="text-white">SITEMAP</h6>
        <Link href={'#home'} className="link link-hover">Home</Link>
        <Link href={'#technology'} className="link link-hover">Technology</Link>
        <Link href={'#services'} className="link link-hover">Services</Link>
        <Link href={'#about'} className="link link-hover">About</Link>
      </nav>
      <nav>
        <h6 className="text-white">CASE STUDIES</h6>
        <Link href={'https://www.swiss.com/ar/es/homepage'} className="link link-hover" target="_blank" rel="noopener noreferrer">Swiss Airlines</Link>
        <Link href={'https://www.google.com/'} target="_blank" rel="noopener noreferrer" className="link link-hover">Google</Link>
        <Link href={'https://www.apple.com/'} target="_blank" rel="noopener noreferrer" className="link link-hover">Apple</Link>
        <Link href={'https://www.nike.com.ar/'} target="_blank" rel="noopener noreferrer" className="link link-hover">Nike</Link>
      </nav>
      <nav className="self-start">
        <h6 className="text-white">CONTACT</h6>
        <Link href={'/jobs'} className="link link-hover">Jobs</Link>
        <Link href={'/hire-us'} className="link link-hover">Hire us</Link>
      </nav>
    </footer>
  )
}
