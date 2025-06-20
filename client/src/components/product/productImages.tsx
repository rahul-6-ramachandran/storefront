import { useState } from 'react';

export default function ProductImages({ images = [] } : {images : string[]}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full max-w-2xl mx-auto ">
      {/* Main Image */}
      <div className="w-full h-[400px] mb-4">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-1 pt-2">
        {images.slice(0, 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`h-24 w-full object-cover cursor-pointer rounded border-2 ${
              selectedImage === img ? 'border-blue-600' : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
