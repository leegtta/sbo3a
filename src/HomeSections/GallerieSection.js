import "./GallerySection.css";

const GallerieSection = () => {
  const images = [
    "gallerie1.png",
    "gallerie2.png",
    "gallerie3.png",
  ];

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">GALLERY</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="gallery-btn">More</button>
    </section>
  );
};

export default GallerieSection;
