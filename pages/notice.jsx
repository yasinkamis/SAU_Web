/* eslint-disable @next/next/no-img-element */
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styled from 'styled-components';

const GalleryPage = () => {
  return (
    <>
      <h1 className="my-3">Duyurular</h1>
      <Gallery className="d-flex">
        <div className="text-center">
          <Zoom>
            <img
              src="https://www.sakarya.edu.tr/assets/img/banner/buton_sehir_hafizasi.png"
              className="rounded"
              alt="..."
            />
          </Zoom>
        </div>
        <div className="text-center">
          <Zoom>
            <img
              src="https://www.sakarya.edu.tr/assets/img/banner/sakarya-universitesi-arastirma-laboratuvari-envanteri.png"
              className="rounded"
              alt="..."
            />
          </Zoom>
        </div>
        <div className="text-center">
          <Zoom>
            <img
              src="https://www.sakarya.edu.tr/assets/img/banner/kutuphane.png"
              className="rounded"
              alt="..."
            />
          </Zoom>
        </div>
        <div className="text-center">
          <Zoom>
            <img
              src="https://www.sakarya.edu.tr/assets/img/banner/nasil-yaparim.png"
              className="rounded"
              alt="..."
            />
          </Zoom>
        </div>
        <div className="text-center">
          <Zoom>
            <img
              src="https://www.sakarya.edu.tr/assets/img/banner/sausem.png"
              className="rounded"
              alt="..."
            />
          </Zoom>
        </div>
        <div className="text-center">
          <Zoom>
            <img
              src="https://www.sakarya.edu.tr/assets/img/banner/teknokent.png"
              className="rounded"
              alt="..."
            />
          </Zoom>
        </div>
        <div className="text-center">
          <Zoom>
            <img
              src="https://www.sakarya.edu.tr/assets/img/banner/study-in-sau.png"
              className="rounded"
              alt="..."
            />
          </Zoom>
        </div>
      </Gallery>
    </>
  );
};

export default GalleryPage;

const Gallery = styled.div`
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;
