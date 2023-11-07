import Image from "next/image";

const French = () => {
  return (
    <div
      className="flex  flex-col items-center transform translate-x-0.5 translate-y-36"
    >
      <Image
        alt="french-lessons"
        src="/images/french.webp"
        width={700}
        height={475}
        sizes="(min-width: 1200px) calc(78.22vw - 97px), 100vw"
        className="w-full"
        priority
        rel="preload"
      />
    </div>
  );
};

export default French;