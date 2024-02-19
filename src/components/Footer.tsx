import Logo from "@/assets/icon/gym-logo.svg";
import { footerLinks } from "@/data/FooterLinksData";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-scroll";


export const Footer = () => (
    <>
<footer className="flex flex-col  mt-14 bg-[#222] ">

    <div className="flex flex-col md:flex-row px-4 md:px-10 py-8 box-width  flex-wrap justify-between gap-5 ">
      <div className="flex flex-col justify-start items-start gap-4 mt-6 flex-1 w-full  md:max-w-[30%]">
      <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500} className=" cursor-pointer flex items-center justify-center gap-2">
        <img src={Logo} alt="Gym" className="size-9" />
        <span className="font-bold">GYM</span>
      </Link>
      <p className='text-sm '>Supere limites e transforme desculpas em motivação no Ginásio GYM. Venha ser a sua melhor versão!</p>
      <div className="flex space-x-1 pt-2 ">
      <Instagram size={18} className="cursor-pointer" />
      <Facebook size={18} className="cursor-pointer" />
      <Twitter size={18} className="cursor-pointer" />
    </div>
      </div>

      <div className="footer__links flex-3">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold text-base">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <a key={link.title} href={link.url} className="text-gray-500 text-sm ">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div  className="bg-white/25 h-px"/>
    <div className="flex justify-between items-center flex-wrap px-4 md:px-10 py-4 box-width">
      <p className="text-sm">@2023 Cafumana. All rights reserved</p>

      <div className="">
        <a href="/" className="text-gray-500 text-xs">
          Privacy & Policy
        </a>
        <a href="/" className="text-gray-500 text-xs">
          Terms & Condition
        </a>
      </div>
    </div>
</footer>



  </>
);

 