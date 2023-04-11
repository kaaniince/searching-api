function ImageItem({ image }) {
  return (
    <div>
      <img
        className="mb-8"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;
