import { ICardPlan } from "@/types";

export const cardPlanData: ICardPlan[] = [
    {
        name: "Plano Básico",
        price: 5000,
        description: 'Acesso ao ginásio durante horário de funcionamento, incluindo uso de equipamentos básicos e participação em aulas em grupo regulares.',
        inserted: [
          "Acesso à área de musculação",
          "Acesso às aulas em grupo (ex: aeróbica, spinning)",
          "Acesso aos chuveiros e vestiários"
        ]
      },
      {
        name: "Plano VIP",
        price: 20000,
        description: 'Experiência exclusiva com acesso a todos os serviços do ginásio, incluindo áreas VIP, treinamento personalizado ilimitado, sessões de spa, serviços de nutricionista e acesso prioritário a eventos especiais.',
        inserted: [
          "Acesso exclusivo a áreas VIP",
          "Treinamento personalizado ilimitado com instrutores de elite",
          "Acesso a sessões de spa (massagens, sauna)",
          "Consulta com nutricionista para orientação alimentar personalizada",
          "Acesso prioritário a eventos especiais do ginásio (ex: workshops, competições)"
        ]
      },
      {
        name: "Plano Premium",
        price: 10000,
        description: 'Acesso ilimitado ao ginásio durante todo o horário de funcionamento, incluindo uso de equipamentos avançados, aulas especiais e treinamento personalizado mensal.',
        inserted: [
          "Acesso ilimitado à área de musculação e cardio",
          "Acesso ilimitado às aulas em grupo (ex: pilates, yoga)",
          "Acesso aos chuveiros e vestiários",
          "Treinamento personalizado mensal com um instrutor certificado"
        ]
      },
];
