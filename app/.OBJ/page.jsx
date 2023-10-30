import Image from "next/image";

const Obj = () => {
  return (
    <div className="flex  flex-col  transform translate-x-0.5 translate-y-36 mt-1 mr-5 relative">
      <div className="flex flex-row">
        <Image
          src="/images/obj1.png"
          alt="invasive-1"
          width={500}
          height={500}
          sizes="(min-width: 1740px) 41.67vw, (min-width: 700px) calc(51.67vw - 172px), 55.53vw"
        />
        <div className="text-right absolute w-2/12 left">
          <p>1.</p>
          <span>Animal Cuff Inspired Design</span>
          <p>2.</p>
          <span>
            Limited use of aluminium with AI optimised <br /> topology for a
            comfortable weight
          </span>
          <p>3.</p>
          <span>arbon fibre for flexibility</span>
          <p>4.</p>
          <span>EPDM recycled rubber for better grip</span>
        </div>

        <Image
          src="/images/obj2.png"
          alt="invasive-1"
          width={500}
          height={500}
          sizes="(min-width: 1740px) 41.67vw, (min-width: 700px) calc(51.67vw - 172px), 55.53vw"
        />
      </div>
    </div>
  );
};

export default Obj;
