import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = ({ children, showIndicators = true }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows
      showThumbs={false}
      showStatus={false}
      swipeable={false}
      showIndicators={showIndicators}
    >
      {children}
    </Carousel>
  );
};

export default Slider;
