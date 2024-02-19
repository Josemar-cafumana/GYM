import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CardText } from "@/components/CardText";
import { CardImage } from "@/components/CardImage";
import { CardPlan } from "@/components/CardPlan";
import { Footer } from "@/components/Footer";
import { CTA } from "./components/CTA";

import { cardTextData } from "@/data/CardTextData";
import { cardImageData } from "@/data/CardImageData";
import { cardPlanData } from "@/data/CardPlan";

import AboutImage from "@/assets/img/img-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export function App() {

  return (
    <>
      <Navbar />
      <Hero />

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center box-width px-4 md:px-10 py-12 gap-10">
        {cardTextData.map((card) => (
          <CardText {...card} key={card.id} />
        ))}
      </div>

      {/* About us */}
      <div
        id="about"
        className="flex flex-col md:flex-row px-4 md:px-10 gap-16 my-16 box-width items-center justify-center text-center md:text-left"
      >
        <div className="flex-1 h-[35rem] rounded-md overflow-hidden">
          <img
            src={AboutImage}
            className="object-cover h-full w-full"
            alt="Man trainning"
          />
        </div>

        <div className="flex-1  ">
          <span className="text-sm uppercase font-thin">Nossa diferença</span>
          <h2 className="text-4xl font-bold py-4 leading-tight max-w-fit md:max-w-[28rem]">
            Treine com um treinador experiente em todas as sessões.
          </h2>
          <p className="text-base max-w-fit md:max-w-[32rem]">
            Treine com um treinador experiente em todas as sessões e alcance
            seus objetivos de fitness com confiança e segurança. Receba
            orientação personalizada, ajustes técnicos e motivação constante
            para maximizar seus resultados. Conte com anos de experiência no
            setor para garantir cada movimento seja eficaz e benéfico para você.
            Junte-se a nós hoje e transforme seu treino em uma jornada de
            crescimento e superação pessoal.
          </p>
          <button className="button my-8">Sobre nós</button>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="px-4 md:px-10 my-16 box-width">
        <div className="text-center max-w-fit mx-auto">
          <span className="text-sm uppercase font-thin">Testemunhos</span>
          <h2 className="text-4xl font-bold py-4 leading-tight ">
            Membros felizes e saudáveis é o que buscamos!
          </h2>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          modules={[Pagination]}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-6"
        >
          {cardImageData.map((card) => (
            <SwiperSlide key={card.id}>
              <CardImage {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Plans */}
      <div id="plans" className="px-4 md:px-10 my-16 box-width">
        <div className="text-center max-w-fit mx-auto">
          <span className="text-sm uppercase font-thin">Nossos preços</span>
          <h2 className="text-4xl font-bold pt-4 leading-tight ">
            Escolha a melhor plano para você!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 auto-rows-[30rem]  items-center justify-center my-14">
          {cardPlanData.map((plan, index) => (
            <CardPlan index={index} key={plan.name} {...plan} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}
