import Image from "next/image"

const DeadVase = () => {
  return (
     <div className="md:grid md:grid-cols-6 md:grid-rows-1 sm:flex sm:flex-col transform translate-x-0.5 translate-y-36 gap-10 mt-1 mr-5">
      <div className="col-start-1 col-span-3 z-0 row-start-1">
      <Image
          src="/images/vase1.webp"
          alt="vase1"
          width={700}
          height={475}
          className="w-full"
          sizes="(min-width: 1200px) calc(39.11vw - 78px), calc(50vw - 30px)"
          priority
        />
         <p className="text-[#484848] md:w-8/12 sm:w-full font-MPlus1 font-wide font-thin tracking-normal text-base leading-6 mt-10 mb-10">
          The structure's whole ideology is in connection with dead cells finding the structure in nature in the form of dried ground, turtle shell, a wall, and many more items of every day. Vase was created specifically for dead plants. With an open body for the dried leaves to grow out of. Built on the structure vase was crafted by 3D printing parts and combining them together by hand, with 3D resin and UV light in hand.
        </p>
      </div>
     <div className="z-20 md:col-start-2 md:col-span-3 md:row-start-1 md:self-end sm:flex">
     <Image
          src="/images/vase3.webp"
          alt="vase1"
          width={700}
          height={475}
          className="w-full"
          sizes="(min-width: 1200px) calc(39.11vw - 78px), calc(50vw - 30px)"
          priority
        />
     </div>
      <div className="col-start-4 row-start-1 col-span-3">
      <p className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-base leading-6">
          Voronoi structures are geometric patterns that occur naturally in various systems, such as the distribution of cells in plant tissues, the shape of soap bubbles, and the arrangement of particles in a crystal lattice. Voronoi structures are characterized by a set of points in a space, known as seeds or generators, which partition the space into regions, called Voronoi cells, such that each cell contains all the points that are closer to its own generator than to any other.
        </p>
      <Image
          src="/images/vase2.webp"
          alt="vase1"
          width={700}
          height={475}
          className="w-full mt-5"
          sizes="(min-width: 1200px) calc(39.11vw - 78px), calc(50vw - 30px)"
          priority
        />
     
      </div>
      
     
     </div>
  )
}

export default DeadVase