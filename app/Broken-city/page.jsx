import Image from "next/image"

const Broken = () => {
  return (
    <div className="flex  flex-col  transform translate-x-0.5 translate-y-36 mt-1 mr-5">
        <h2 className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-lg leading-6">
          Knife In The Back
        </h2>
        <br />
        <p className="text-[#484848] font-MPlus1 font-wide font-thiner tracking-normal text-sm">
          Objects built from the parts found in the ruins of my childhood house
          a collapsed building in my hometown of Batumi. The catastrophical fail
          in the buildings base caused an immediate crash of a 7 floor apartment
          building, nine people, including three children, have been found dead
          in the wreckage. This incident was caused by the carelessness of a
          construction worker and their boss.
        </p>
        <br />
        <Image
          src="/images/brokenCity1.webp"
          alt="broken1"
          width={700}
          height={475}
          sizes="(min-width: 1200px) calc(78.22vw - 97px), 100vw"
          className="w-full"
          priority
        />
        <br />
        <div className="w-full flex flex-row">
        <Image
        src='/images/brokenCity2.webp'
        alt="broken2"
        width={700}
        height={475}
        className='w-6/12 mt-5'
        sizes="(min-width: 1200px) calc(39.11vw - 58px), calc(50vw - 10px)"
        priority
         />
         <Image 
        src='/images/brokenCity3.webp'
        alt="broken3"
        width={700}
        height={475}
        className='w-6/12 h-5/6'
        sizes="(min-width: 1200px) calc(39.11vw - 58px), calc(50vw - 10px)"
        loading="lazy"
        />

        </div>
        <h2 className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-lg leading-6  transform translate-y-[-5rem]">
        Barbed Wire
        </h2>
        <br />
        <p className="text-[#484848] font-MPlus1 font-wide font-thiner tracking-normal text-sm transform translate-y-[-5rem]">
        Quote of the Georgian people "20% of my land is occupied by Russia"
          was initially the truth, but slowly we realised that 20% is only the
          beginning. In 2008, after occupying two Georgian territories of
          Abkhazia and South Ossetia, the occupiers erected a barbed wire along
          the border, guarded by the Russian armed forces. What started as a
          barrier between Georgia and cccupied territorie, slowly turned into a
          creeping invasion. Day by day step by step Russia is moving the
          border, every new morning people who yesterday lived on our side of
          the border wake up on the other side with their families. And there is
          no way out. The quote may have been true at the time, but I believe
          that now, 14 years later, 20% has become an illusion. Chairs made by
          remelting barbed wire, with a small amount of georgian wine left
          inside of the body. Just like corrosion on steel, which spreads
          through the metal and slowly rusts it away, this process will not stop
          in Georgia until the whole chair colapses.

        </p>
        <Image
        src='/images/brokenCity4.webp'
        alt="broken4"
        width={700}
        height={475}
        className='w-full transform translate-y-[-2rem]'
        sizes="(min-width: 1200px) calc(78.22vw - 97px), 100vw"
        loading="lazy"
         />
      </div>
  )
}

export default Broken