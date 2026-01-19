'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage]}
              alt={`${alt} ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
