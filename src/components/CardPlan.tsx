import { ICardPlan } from "@/types";
import { Check } from "lucide-react";

interface Props extends ICardPlan {
    index: number;
}

export const CardPlan = ({
  index,
  name,
  price,
  description,
  inserted,
}: Props) => {
  return (
    <div
      className={`${
        index == 1 ? "ring" : "bg-[#222]"
      }  flex flex-col items-center justify-center rounded-md px-4 py-6 cursor-pointer hover:ring`}
    >
      <h4 className="font-semibold text-xl mb-3">{name}</h4>
      <span className="font-semibold text-2xl mb-3">
        {price.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}
      </span>
      <p className="text-center text-sm mb-6">{description}</p>
      <div>
        {inserted.map((insert) => (
          <span className="flex items-center gap-2 text-xs" key={insert}>
            {" "}
            <Check size={14} /> {insert}
          </span>
        ))}
      </div>
      <button className="button  mt-6">Torne-se membro</button>
    </div>
  );
};
