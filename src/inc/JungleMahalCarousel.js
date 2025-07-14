import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function JungleMahalCarousel() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", marginTop: "40px" }}>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={1500}>
        <div>
          <img src="/img/Home1.jpg" alt="Scenic View 1" />
          {/* <p className="legend">Hill View</p> */}
        </div>
        <div>
          <img src="/img/Home2.jpg" alt="Scenic View 2" />
          {/* <p className="legend">Dense Forest</p> */}
        </div>
        <div>
          <img src="/img/Home3.jpg" alt="Scenic View 3" />
          {/* <p className="legend">Waterfall</p> */}
        </div>
        <div>
          <img src="/img/Home4.jpg" alt="Scenic View 3" />
          {/* <p className="legend">Waterfall</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default JungleMahalCarousel;
