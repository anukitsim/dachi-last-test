import Image from "next/image"

const French = () => {
  return (
    <div className="flex  flex-col items-center transform translate-x-0.5 translate-y-36 mt-1">
 <Image
          alt="french-lessons"
          src="/images/french.png"
          width={700}
          height={475}
          sizes="(min-width: 1200px) calc(78.22vw - 97px), 100vw"
          className="w-full"
        />
    </div>
  )
}

export default French