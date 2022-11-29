import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <>
      <button className="btn btn-primary my-5 mx-2">deneme</button>
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
            src="https://imgs.search.brave.com/dt7c2zW8t9dvrz9gwf92rqSqr3vxBFmVpAvy1dM5U4I/rs:fit:1200:663:1/g:ce/aHR0cHM6Ly9pY2Ru/LmVuc29uaGFiZXIu/Y29tL3Jlc2ltbGVy/L2RpZ2VyL2tvay8y/MDIwLzA2LzAzL3Nv/eXV0XzMzMDQuanBn"
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
            src="https://imgs.search.brave.com/dt7c2zW8t9dvrz9gwf92rqSqr3vxBFmVpAvy1dM5U4I/rs:fit:1200:663:1/g:ce/aHR0cHM6Ly9pY2Ru/LmVuc29uaGFiZXIu/Y29tL3Jlc2ltbGVy/L2RpZ2VyL2tvay8y/MDIwLzA2LzAzL3Nv/eXV0XzMzMDQuanBn"
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
