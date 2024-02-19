import { ICardImage } from '@/types'
import { Facebook, Instagram, Twitter } from "lucide-react";

export const CardImage = ({ name, image,  description }: ICardImage) => {
  return (
    <>
    <div className="relative">
    <img
      src={image}
      className="w-full h-full  object-contain  max-h-[275px]"
      alt="Testemunho 1"
    />
    <div className="absolute bottom-0 left-0 right-0 h-1/2  bg-gradient-to-t from-black/80 to-black/0 pointer-events-none" />
  </div>
  <div className="p-4  border border-t-0 border-white/10">
    <p className="text-sm tracking-tight mb-2">
      {description}
    </p>
    <span className="font-semibold text-sm">{name}</span>
    <div className="flex space-x-1 pt-2 ">
      <Instagram size={18} className="cursor-pointer" />
      <Facebook size={18} className="cursor-pointer" />
      <Twitter size={18} className="cursor-pointer" />
    </div>
  </div>
  </>
  )
}

 