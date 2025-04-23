
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImagesProps {
  productName: string;
  images: string[];
}

export function ProductImages({ productName, images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg border border-gray-200 bg-white mb-4 flex items-center justify-center min-h-[340px] min-w-[270px] max-w-[370px] overflow-hidden aspect-square">
        <img
          src={selectedImage}
          alt={productName}
          className="transition-all duration-300 rounded object-contain max-h-[300px] w-auto mx-auto"
          style={{ maxWidth: "100%", maxHeight: 340, background: "#fafafa" }}
          draggable={false}
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((imgSrc, i) => (
            <div
              key={i}
              className={cn(
                "cursor-pointer rounded border p-1 min-w-[52px] max-w-[52px] h-[52px] flex items-center justify-center bg-gray-50",
                selectedImage === imgSrc
                  ? "border-primary border-2 shadow-md"
                  : "border-gray-200 hover:border-primary/60"
              )}
              onClick={() => setSelectedImage(imgSrc)}
            >
              <img
                src={imgSrc}
                className="w-full h-full object-contain"
                alt={`Thumbnail ${i + 1}`}
                style={{ maxWidth: "44px", maxHeight: "44px" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
