import Link from "next/link"
import { FaRegAddressCard } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-20 text-slate-100 w-full max-w-[80%] text-lg m-auto">
      <h1 className="font-semibold">compleet labs</h1>
      <nav className="flex gap-10">
        <Link href={'#home'} scroll={false} prefetch={false}>Home</Link>
        <Link href={'#services'} scroll={false} prefetch={false}>Services</Link>
        <Link href={'#technologies'} scroll={false} prefetch={false}>Technology</Link>
        <Link href={'#clients'} scroll={false} prefetch={false}>Case studies</Link>
        <Link href={'#about'} scroll={false} prefetch={false}>About</Link>
        <Link href={'/hire-us'} className="flex items-center gap-2 font-semibold">
          <FaRegAddressCard />  
          Hire us
        </Link>
      </nav>
    </header>
  )
}
