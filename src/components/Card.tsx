import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  imagePath?: StaticImageData;
  imageDescription: string;
}
export const Card: FC<CardProps> = ({
  title,
  description,
  imagePath,
  imageDescription,
}) => {
  return (
    <article className="glass-card flex flex-col gap-6 rounded-xl p-8 transition-transform hover:-translate-y-2">
      <div className="flex h-48 items-center justify-center overflow-hidden rounded-lg bg-surface-container-high">
        {imagePath ? (
          <Image src={imagePath} alt={imageDescription} className="max-h-full w-auto" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-on-surface-variant">Imagem em breve</div>
        )}
      </div>

      <div>
        <h3 className="mb-3 font-headline-md text-headline-md text-primary">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
    </article>
  );
};
