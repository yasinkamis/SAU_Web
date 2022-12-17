/* eslint-disable @next/next/no-img-element */
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styled from 'styled-components';

const GalleryPage = () => {
  return (
    <Gallery className="d-flex">
      <div class="text-center">
        <Zoom>
          <img
            src="https://www.sakarya.edu.tr/assets/img/banner/buton_sehir_hafizasi.png"
            class="rounded"
            alt="..."
          />
        </Zoom>
      </div>
      <div class="text-center">
        <Zoom>
          <img
            src="https://www.sakarya.edu.tr/assets/img/banner/sakarya-universitesi-arastirma-laboratuvari-envanteri.png"
            class="rounded"
            alt="..."
          />
        </Zoom>
      </div>
      <div class="text-center">
        <Zoom>
          <img
            src="https://www.sakarya.edu.tr/assets/img/banner/kutuphane.png"
            class="rounded"
            alt="..."
          />
        </Zoom>
      </div>
      <div class="text-center">
        <Zoom>
          <img
            src="https://www.sakarya.edu.tr/assets/img/banner/nasil-yaparim.png"
            class="rounded"
            alt="..."
          />
        </Zoom>
      </div>
      <div class="text-center">
        <Zoom>
          <img
            src="https://www.sakarya.edu.tr/assets/img/banner/sausem.png"
            class="rounded"
            alt="..."
          />
        </Zoom>
      </div>
      <div class="text-center">
        <Zoom>
          <img
            src="https://www.sakarya.edu.tr/assets/img/banner/teknokent.png"
            class="rounded"
            alt="..."
          />
        </Zoom>
      </div>
      <div class="text-center">
        <Zoom>
          <img
            src="https://www.sakarya.edu.tr/assets/img/banner/study-in-sau.png"
            class="rounded"
            alt="..."
          />
        </Zoom>
      </div>
    </Gallery>
  );
};

export default GalleryPage;

const Gallery = styled.div`
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;
