import { Lightbulb, Clock5, Flag, Trophy } from "lucide-react";
import { ICardText } from "@/types";

export const cardTextData: ICardText[] = [
  {
    id: Math.random(),
    icon: <Lightbulb size={28} />,
    title: "Programa de treinamento personalizado",
    description: "Maximize seus resultados com orientação individualizada para atingir seus objetivos de forma eficaz.",
  },
  {
    id: Math.random(),
    icon: <Clock5 size={28} />,
    title: "Mais de 40 aulas por semana",
    description: "Explore uma variedade de aulas dinâmicas lideradas por instrutores especializados para todos os níveis de condicionamento físico.",
  },
  {
    id: Math.random(),
    icon: <Flag size={28} />,
    title: "Limites de capacidade",
    description: "Desafie-se e alcance novos patamares com um ambiente que incentiva o crescimento pessoal e a superação de limites.",
  },
  {
    id: Math.random(),
    icon: <Trophy size={28} />,
    title: "Ambiente divertido & de apoio",
    description: "Desfrute de uma atmosfera acolhedora e motivadora, onde você se sentirá inspirado a cada treino e fará parte de uma comunidade dedicada.",
  },
];
