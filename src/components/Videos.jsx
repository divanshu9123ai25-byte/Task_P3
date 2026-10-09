import VideoCard from './VideoCard';

const galleryImages = [
'/assets/gallery1.jpg',
'/assets/gallery2.jpg',
'/assets/gallery3.jpg',
'/assets/gallery4.jpg',
'/assets/gallery5.jpg',
'/assets/gallery6.jpg',
'/assets/gallery7.jpg',
'/assets/gallery8.jpg',
];

function Videos() {
return ( <section className="section"> <h2>My Gallery</h2>


  <div className="gallery">
    {galleryImages.map((image, index) => (
      <VideoCard
        key={image}
        image={image}
        title={`Gallery image ${index + 1}`}
      />
    ))}
  </div>
</section>

);
}

export default Videos;
