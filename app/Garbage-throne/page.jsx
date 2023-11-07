import Image from "next/image";


const Garbage = () => {
  return (
    <div className="flex  md:flex-row sm:flex-col  transform translate-x-0.5 translate-y-36 mt-1">
      <Image
        src="/images/garbage1.webp"
        alt="garbage1"
        width={700}
        height={475}
        sizes="(min-width: 3000px) 700px, (min-width: 1200px) 23.54vw, (min-width: 900px) 700px, calc(77.59vw + 17px)"
        priority
      />
      <div className="flex-col m-5">
        
      <p className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-base leading-6">
        As an adult remembering when an empty streets used to be full of
        adventure, seeing all of the trash laying around, wondering to what
        could be done with all of the items lost to the time. Imagining all the
        ways it could be rebuilt and given second life to, actually listen to
        the stories of old unwanted family members who are alone on the streets
        with no one to listen. This mindset has stuck to me to this day when
        every new place is a scavenger hunt of all the trash around, every
        sidewalk corner can hide a the treasure that in good hands can be even
        more then before.
      </p>
      <br />
      <br />
      <br />
      <span className="text-[#484848] text-right font-MPlus1 lg:text-lg leading-6 tracking-normal">
      Chair is constructed by collecting and stealing items on a single street of Tbilisi
      </span>
      <div className="flex md:flex-row sm:flex-col">
      <Image 
      src='/gif/garbage-gif1.gif'  
      width={400} 
      height={400} 
      sizes="(min-width: 2240px) 400px, (min-width: 1200px) calc(19.71vw - 37px), (min-width: 560px) 400px, calc(79.17vw - 28px)"
      priority
      rel="preload"
      />
      <Image 
      src='/gif/garbage-gif2.gif'  
      width={400} 
      height={400} 
      sizes="(min-width: 2240px) 400px, (min-width: 1200px) calc(19.71vw - 37px), (min-width: 560px) 400px, calc(79.17vw - 28px)" i
      priority
      rel="preload"

      />
      </div>

      <div className="flex md:flex-row sm:flex-col">
      <Image 
      src='/gif/garbage-gif3.gif'  
      width={400} 
      height={400} 
      priority
      sizes="(min-width: 2320px) 400px, (min-width: 1200px) calc(18.27vw - 20px), (min-width: 560px) 400px, calc(79.17vw - 28px)"
      rel="preload"
      />
      <Image 
      src='/gif/garbage-gif4.gif'  
      width={400} 
      height={400} 
      sizes="(min-width: 1500px) 400px, (min-width: 1200px) calc(10.71vw + 241px), (min-width: 560px) 400px, calc(79.17vw - 28px)"
      rel="preload"
      priority

      />
        
            <Image
  src="/images/garbage3.webp"
  alt="garbage3"
  width={700}
  height={475}
  sizes="(min-width: 940px) 700px, calc(79.03vw - 27px)"
 priority
 className="md:hidden"

/>
      </div>
      
      </div>
     
   
    </div>
  );
};

export default Garbage;
