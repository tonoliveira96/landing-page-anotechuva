import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  imagePath: StaticImageData;
  imageDescription: string;
}
export const Card: FC<CardProps> = ({
  title,
  description,
  imagePath,
  imageDescription,
}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 bg-slate-900 max-w-md rounded-2xl p-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-lg text-justify">{description}</p>
      <Image src={imagePath} alt={imageDescription} width={250} height={250} />
    </div>
  );
};
