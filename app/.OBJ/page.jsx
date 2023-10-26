import Image from "next/image";

const Obj = () => {
  return (
    <div className="md:grid md:grid-cols-12 md:grid-rows-2 md:transform md:translate-x-0.5 md:translate-y-36  mt-1 sm:flex sm:flex-col sm:m-5">
      <Image
        src="/images/obj1.png"
        alt="invasive-1"
        width={500}
        height={500}
        sizes="(min-width: 1740px) 41.67vw, (min-width: 700px) calc(51.67vw - 172px), 55.53vw"
        className="md:w-full sm:w-full h-auto z-0 md:col-start-1 md:row-start-1 md:col-span-6"
      />
      <Image
        src="/images/obj2.png"
        alt="invasive-1"
        width={500}
        height={500}
        sizes="(min-width: 1740px) 41.67vw, (min-width: 700px) calc(51.67vw - 172px), 55.53vw"
        className="md:w-full sm:w-full h-auto z-0 md:col-start-6 md:row-start-1  md:col-span-6"
      />
       <Image
        src='/images/Text.png'
        alt="invasive-1"
        width={500}
        height={500}
        sizes="(min-width: 1740px) 41.67vw, (min-width: 700px) calc(51.67vw - 172px), 55.53vw"
        className="md:w-full sm:w-full md:col-start-5 md:row-start-1 md:col-span-3 mt-10 z-50"
      />
      
      
    </div>
  )
}

export default Obj;
