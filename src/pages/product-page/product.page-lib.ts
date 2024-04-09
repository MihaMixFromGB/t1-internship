import { ReactImageGalleryItem } from 'react-image-gallery';

export function transformImagesToGallery(
  images: string[],
): ReactImageGalleryItem[] {
  return images.map(image => ({
    original: image,
    thumbnail: image,
  }));
}
