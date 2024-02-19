import Logo from "@/assets/icon/gym-logo.svg";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { useMedia } from "react-use";
import { Link, Button } from "react-scroll";

export const Navbar = () => {
  const isWide = useMedia("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 md:px-10 py-4 box-width flex justify-between items-center relative">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
        className=" cursor-pointer flex items-center justify-center gap-2"
      >
        <img src={Logo} alt="Gym" className="size-9" />
        <span className="font-bold">GYM</span>
      </Link>

      {/* Menu desktop */}
      <div className="md:flex hidden items-center space-x-6 font-medium text-base ">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="cursor-pointer hover:text-slate-200"
        >
          Início
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="cursor-pointer hover:text-slate-200"
        >
          Sobre
        </Link>
        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="cursor-pointer hover:text-slate-200"
        >
          Aulas
        </Link>
        <Link
          to="plans"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="cursor-pointer hover:text-slate-200"
        >
          Preçario
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="cursor-pointer hover:text-slate-200"
        >
          Contacto
        </Link>
        <Button
          to="plans"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="border rounded-md px-3 py-2 duration-75 hover:bg-slate-100 hover:text-background"
        >
          Torne-se membro
        </Button>
      </div>

      <div
        className="flex md:hidden  cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <AlignJustify className="size-6" />
      </div>

      {/* Menu mobile */}
      {isWide && (
        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-[30rem]"
          } fixed  top-0 bottom-0 duration-500 ease-in-out items-center bg-[#222] h-[100vh] w-60 pt-20 px-6 flex  flex-col space-y-8 font-medium text-base`}
        >
          <button
            className="absolute right-4 top-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="cursor-pointer hover:text-slate-200"
          >
            Início
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="cursor-pointer hover:text-slate-200"
          >
            Sobre
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="cursor-pointer hover:text-slate-200"
          >
            Aulas
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="cursor-pointer hover:text-slate-200"
          >
            Preçario
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="cursor-pointer hover:text-slate-200"
          >
            Contacto
          </Link>
          <Button
            to="plans"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="border rounded-md px-3 py-2 duration-75 hover:bg-slate-100 hover:text-background"
          >
            Torne-se membro
          </Button>
        </div>
      )}
    </nav>
  );
};
