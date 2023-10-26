"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const isActive = (href) => {
    if (pathname === href) {
      return "text-[#909090]";
    }
    return "";
  };


  return (
    <aside>
      <div className="flex flex-col items-start gap-2 self-stretch w-[261.575px]">
        <Link href='/' className="self-stretch text-[#484848] text-2xl leading-normal tracking-wide whitespace-nowrap">
          Dachi-Giorgi Garuchava
        </Link>
        <button className="lg:hidden text-[#484848]" onClick={toggleMenu}>Menu</button>
        <Link href='/about' className={`text-base text-[#909090] tracking-wide ${menuOpen ? "" : "hidden lg:inline-block"}`}>about</Link>
      </div>
     
      <div className="flex w-[170.226px] flex-col justify-center items-end">
        <Link href='/witness' className={` text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/witness")}`}> The Witness</Link>
        <Link href='/invasive-modification' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/invasive-modification")}`}> Invasive Modification</Link>
        <Link href='/STEPS' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/STEPS")}`}> STEPS</Link>
        <Link href='/Hyphen' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/Hyphen")}`}> Hyphen</Link>
        <Link href='/I-need-protection' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/I-need-protection")}`}> I Need Protection</Link>
        <Link href='/.OBJ' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/.OBJ")}`}> .OBJ</Link>
        <Link href='/French-lessons' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/French-lessons")}`}>French Lessons</Link>
        <Link href='/Garbage-throne' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/Garbage-throne")}`}>Garbage Throne</Link>
        <Link href='/PSR' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/PSR")}`}> PSR</Link>
        <Link href='/Dead-vase' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/Dead-vase")}`}>Dead Vase</Link>
        <Link href='/Broken-city' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/Broken-city")}`}>Broken City</Link>
        <Link href='/March32' className={`text-[#484848] text-base leading-6 tracking-wide  ${menuOpen ? "" : "hidden lg:inline-block"} ${isActive("/March32")}`}> March32</Link>
      </div>
    </aside>
  )
}

export default Sidebar