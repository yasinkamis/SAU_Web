/* eslint-disable @next/next/no-img-element */
import { NotificationList, Slider } from 'components';
import styled from 'styled-components';

const mockData = [
  {
    title: 'Önemli Duyurular',
    href: '#',
    list: [
      {
        href: '#',
        date: '5 Kasım',
        title: 'Ulusal Staj Programı 2023 Başvuruları Başladı',
        description:
          'Gençlerimizi kamu kurumları ve gönüllü özel sektör kuruluşları ile buluşturan #UlusalStajProgramı 2023 başvuruları için son günler!',
      },
      {
        href: '#',
        date: '9 Kasım',
        title: 'Ulusal Staj Programı 2023 Başvuruları Başladı',
        description:
          'Gençlerimizi kamu kurumları ve gönüllü özel sektör kuruluşları ile buluşturan #UlusalStajProgramı 2023 başvuruları için son günler!',
      },
      {
        href: '#',
        date: '11 Kasım',
        title: 'Ulusal Staj Programı 2023 Başvuruları Başladı',
        description:
          'Gençlerimizi kamu kurumları ve gönüllü özel sektör kuruluşları ile buluşturan #UlusalStajProgramı 2023 başvuruları için son günler!',
      },
      {
        href: '#',
        date: '13 Kasım',
        title: 'Ulusal Staj Programı 2023 Başvuruları Başladı',
        description:
          'Gençlerimizi kamu kurumları ve gönüllü özel sektör kuruluşları ile buluşturan #UlusalStajProgramı 2023 başvuruları için son günler!',
      },
      {
        href: '#',
        date: '1 Ocak',
        title: 'Ulusal Staj Programı 2023 Başvuruları Başladı',
        description:
          'Gençlerimizi kamu kurumları ve gönüllü özel sektör kuruluşları ile buluşturan #UlusalStajProgramı 2023 başvuruları için son günler!',
      },
    ],
  },
];

const HomePage = () => {
  return (
    <Wrapper>
      <ContentSlider>
        <Slider>
          <div>
            <img src="https://www.sakarya.edu.tr/assets/img/slider/-966493312.jpeg" />
          </div>
          <div>
            <img src="https://www.sakarya.edu.tr/assets/img/slider/-400099621.jpeg" />
          </div>
          <div>
            <img src="https://www.sakarya.edu.tr/assets/img/slider/-864783649.jpg" />
          </div>
        </Slider>
      </ContentSlider>
      <List>
        <NotificationList data={mockData} />
        <NotificationList data={mockData} />
        <NotificationList data={mockData} />
      </List>
      <Slider showIndicators={false}>
        <ImageWrapper>
          <img src="https://www.sakarya.edu.tr/assets/img/banner/sausem.png" />
          <img src="https://www.sakarya.edu.tr/assets/img/banner/kutuphane.png" />
          <img src="https://www.sakarya.edu.tr/assets/img/banner/nasil-yaparim.png" />
          <img src="https://www.sakarya.edu.tr/assets/img/banner/teknokent.png" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="https://www.sakarya.edu.tr/assets/img/banner/teknokent.png" />
          <img src="https://www.sakarya.edu.tr/assets/img/banner/sausem.png" />
          <img src="https://www.sakarya.edu.tr/assets/img/banner/nasil-yaparim.png" />
          <img src="https://www.sakarya.edu.tr/assets/img/banner/kutuphane.png" />
        </ImageWrapper>
      </Slider>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const List = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;

const ContentSlider = styled.div`
  position: relative;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 13.3333%;
  align-items: center;
  img {
    position: relative;
    width: 15% !important;
  }
`;
