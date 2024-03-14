import Link from "next/link"
import { FaRegAddressCard } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-20 text-slate-100 w-full max-w-[80%] text-lg m-auto">
      <h1 className="font-semibold">compleet labs</h1>
      <nav className="flex gap-10">
        <Link href={'#home'}>Home</Link>
        <Link href={'#services'}>Services</Link>
        <Link href={'#technologies'}>Technology</Link>
        <Link href={'#clients'}>Case studies</Link>
        <Link href={'#about'}>About</Link>
        <Link href={'#hire'} className="flex items-center gap-2 font-semibold">
          <FaRegAddressCard />  
          Hire us
        </Link>
      </nav>
    </header>
  )
}
