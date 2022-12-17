/* eslint-disable @next/next/no-img-element */
import { NotificationList, Slider } from 'components';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Wrapper>
      <ContentSlider>
        <Slider>
          <div>
            <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          </div>
          <div>
            <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          </div>
          <div>
            <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          </div>
        </Slider>
      </ContentSlider>
      <List>
        <NotificationList
          title="deneme"
          href="deneme"
          date="denem1e123123123"
          notificationTitle="deneme"
          notificationText="deneme"
        />
        <NotificationList
          title="deneme"
          href="deneme"
          date="deneme"
          notificationTitle="deneme"
          notificationText="deneme"
        />
        <NotificationList
          title="deneme"
          href="deneme"
          date="deneme"
          notificationTitle="deneme"
          notificationText="deneme"
        />
      </List>
      <Slider showIndicators={false}>
        <ImageWrapper>
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
          <img src="https://fbe.sakarya.edu.tr/timthumb.php?src=https://fbe.sakarya.edu.tr/sites/fbe.sakarya.edu.tr/image/SAVUN.jpg&w=888&h=500" />
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
