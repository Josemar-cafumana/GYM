import Logo from "@/assets/icon/gym-logo.svg";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { useMedia } from 'react-use';

export const Navbar = () => {
  const isWide = useMedia('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="px-6 py-4 w-full flex justify-between items-center relative">
      <div className="flex items-center justify-center gap-2">
        <img src={Logo} alt="Gym" className="size-9" />
        <span className="font-bold">GYM</span>
      </div>

      {/* Menu desktop */}
      <div className="md:flex hidden items-center space-x-6 font-medium text-base ">
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Aulas</a>
        <a href="#">Preçario</a>
        <a href="#">Contacto</a>
        <button className="border rounded-md px-3 py-2 duration-75 hover:bg-slate-100 hover:text-background">
          Torne-se membro
        </button>
      </div>

      <div className="flex md:hidden  cursor-pointer" onClick={() => setIsMenuOpen(true)}>
        <AlignJustify className="size-6" />
      </div>

      {/* Menu mobile */}
      {
        (isWide && isMenuOpen) && (
          <div className="absolute right-0 top-0 bottom-0 items-center bg-[#222] h-[100vh] w-60 justify-center px-6 flex  flex-col space-y-6 font-medium text-base">
          <button className="absolute right-4 top-4" onClick={() => setIsMenuOpen(false)}>
            <X />
          </button>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Aulas</a>
          <a href="#">Preçario</a>
          <a href="#">Contacto</a>
          <button className="border rounded-md px-3 py-2 duration-75 hover:bg-slate-100 hover:text-background">
            Torne-se membro
          </button>
        </div>
        )
      }

    </nav>
  );
};
