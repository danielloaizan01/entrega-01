import Image from "next/image";
interface CardProps{
title:string;
subtitle:string;
imagesrc:string;
}
const Card = ({title,subtitle,imagesrc}:CardProps) => {
  return (
    <div className='bg-black flex flex-col gap-2 w-72 h-48 items-center p-4'>
        <Image className="py-2 max-h-full max-w-full object-contain filter brightness-0 invert" src={imagesrc} alt={title} width={60} height={60} />
        <span className='py-2 text-semibold'>{title}</span>
        <span className="text-gray-500 font-semibold">{subtitle}</span>
    </div>
  )
}

export {Card};