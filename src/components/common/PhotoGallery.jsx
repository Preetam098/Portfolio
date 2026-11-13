import { hasValue } from '../../utils/helpers';

export function PhotoGallery({ photos, title }) {
  const visiblePhotos = Array.isArray(photos)
    ? photos.filter((photo) => hasValue(photo?.src))
    : [];

  if (visiblePhotos.length === 0) {
    return null;
  }

  return (
    <div className="gallery">
      {hasValue(title) ? <h3 className="gallery__title">{title}</h3> : null}
      <ul className="gallery__list">
        {visiblePhotos.map((photo) => (
          <li className="gallery__item" key={photo.src}>
            <img
              className="gallery__image"
              src={photo.src}
              alt={photo.alt ?? ''}
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
