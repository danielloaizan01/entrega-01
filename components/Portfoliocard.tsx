import React from 'react'
import Image from "next/image";
import { ButtonLearn } from './Buttonlearn';

interface PortfoliocardProps{
    title:string;
    text:string;
    imagesrc:string;
    }

const Portfoliocard = ({title,text,imagesrc}:PortfoliocardProps) => {
  return (
    <div className='bg-black flex flex-col gap-4 w-72 h-80 items-center t p-4'>
        <Image className="py-4 max-h-full max-w-full object-contain filter brightness-0 invert" src={imagesrc} alt={title} width={110} height={110} />
        
        <span className='py-2 text-semibold'>{title}</span>
        <span className="text-gray-500 font-semibold">{text}</span>
        <div className='w-full flex text-left'>
        <ButtonLearn />
        </div>
    </div>
  )

}

export {Portfoliocard};