import Image from "next/image"


const Hyphen = () => {
  return (
    <>
    <div className="fixed inset-0 z-0 w-full h-screen overflow-hidden">
      <video className="absolute w-full h-full object-cover" autoPlay muted playsInline loop>
        <source src="/video/background-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10">
        <Image
          alt="background"
          src="/images/hyphenImg.webp"
          layout='fill'
          objectFit='cover'
          quality={100}
          className='opacity-50'
          sizes="100vw"
          priority
        />
      </div>
    </div>

    <div className="relative z-20">
    <Image
          alt="hyphen"
          src="/images/hyphenImgMain.webp"
          width={700}
      height={475}
      className='flex justify-center w-full'
      sizes="(min-width: 1200px) calc(78.22vw - 97px), 100vw"
      priority
      
        />
    </div>
  </>
  )
}

export default Hyphen