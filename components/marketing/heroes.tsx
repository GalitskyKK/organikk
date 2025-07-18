import Image from 'next/image';

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src="/document-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image src="/reading.png" fill className="object-contain dark:hidden" alt="Documents" />
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  );
};
