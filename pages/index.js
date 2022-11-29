import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <>
      <button className="btn btn-primary my-5 mx-2 container-fluid">deneme</button>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgs.search.brave.com/dt7c2zW8t9dvrz9gwf92rqSqr3vxBFmVpAvy1dM5U4I/rs:fit:1200:663:1/g:ce/aHR0cHM6Ly9pY2Ru/LmVuc29uaGFiZXIu/Y29tL3Jlc2ltbGVy/L2RpZ2VyL2tvay8y/MDIwLzA2LzAzL3Nv/eXV0XzMzMDQuanBn"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgs.search.brave.com/Nenl6AfAdc1G-VUUwDdAiCS195eu0kCXcUA6pRwUv3U/rs:fit:1024:731:1/g:ce/aHR0cDovL3d3dy5t/b2RhcGl5ZXIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA5L3Jlc2ltLTEt/MTAyNHg3MzEuanBn"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgs.search.brave.com/feDAHjqrpBcaMKirYmXAfRnKIv2YRS5e-UC0YpFaJ8w/rs:fit:640:494:1/g:ce/aHR0cHM6Ly93d3cu/ZHVueWFhdGxhc2ku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA5L3Jlc2lt/LXRhYmxvLW5hc2ls/LW9rdW51ci02NDB4/NDk0LmpwZw"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;
