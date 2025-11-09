import "./GallerySection.css";

const GallerySection = () => {
  const images = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg",
    "gallery5.jpg",
    "gallery6.jpg",
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

export default GallerySection;
