export interface ICardText {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ICardImage {
  id: number;
  image: string;
  name: string;
  description: string;
}

export interface ICardPlan {
  name: string;
  price: number;
  description: string;
  inserted: string[];
}