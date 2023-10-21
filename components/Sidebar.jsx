import Link from "next/link"

const Sidebar = () => {
  return (
    <aside>
      <div className="flex flex-col items-start gap-2 self-stretch w-[261.575px]">
        <Link href='/' className="self-stretch text-[#484848] text-2xl leading-normal tracking-wide whitespace-nowrap">
          Dachi-Giorgi Garuchava
        </Link>
        <Link href='/' className="text-base text-[#909090] tracking-wide">about</Link>
      </div>
      <div className="flex w-[170.226px] flex-col justify-center items-end">
        <Link href='/witness' className="text-[#484848] text-base leading-6 tracking-wide"> The Witness</Link>
        <Link href='/invasive-modification' className="text-[#484848] text-base leading-6 tracking-wide"> Invasive Modification</Link>
        <Link href='/STEPS' className="text-[#484848] text-base leading-6 tracking-wide"> STEPS</Link>
        <Link href='/Hyphen' className="text-[#484848] text-base leading-6 tracking-wide"> Hyphen</Link>
        <Link href='/I-need-protection' className="text-[#484848] text-base leading-6 tracking-wide"> I Need Protection</Link>
        <Link href='/.OBJ' className="text-[#484848] text-base leading-6 tracking-wide"> .OBJ</Link>
        <Link href='/French-lessons' className="text-[#484848] text-base leading-6 tracking-wide">French Lessons</Link>
        <Link href='/Garbage-throne' className="text-[#484848] text-base leading-6 tracking-wide">Garbage Throne</Link>
        <Link href='/PSR' className="text-[#484848] text-base leading-6 tracking-wide"> PSR</Link>
        <Link href='/Dead-vase' className="text-[#484848] text-base leading-6 tracking-wide">Dead Vase</Link>
        <Link href='/Broken-city' className="text-[#484848] text-base leading-6 tracking-wide">Broken City</Link>
        <Link href='/Marcg32' className="text-[#484848] text-base leading-6 tracking-wide"> March32</Link>
      </div>
    </aside>
  )
}

export default Sidebar