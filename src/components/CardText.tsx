import { ICardText } from "@/types";

export const CardText = ({ icon, title, description }: ICardText) => {
  return (
    <div className=' min-h-28'>
        <span>{icon}</span>
        <h4 className="text-lg font-semibold py-2 leading-tight">{title}</h4>
        <p className="text-sm  ">{description}</p>
    </div>
  )
}