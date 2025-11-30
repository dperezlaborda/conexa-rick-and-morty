import Image from "next/image";
import { ImageProps } from "next/image";

export default function CardImage({ ...props }: ImageProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-t-lg mb-3 mt-0">
      <Image
        {...props}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#8ED959]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}