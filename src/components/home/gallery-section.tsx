import Image from "next/image";
import { galleryImages } from "@/data/home";

export function GallerySection() {
  return (
    <section className="gallery-strip" aria-label="Program photo gallery">
      {galleryImages.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={520}
          height={360}
        />
      ))}
    </section>
  );
}
