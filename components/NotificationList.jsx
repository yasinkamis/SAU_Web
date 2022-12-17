import Image from 'next/image';
import styled from 'styled-components';
import MiniLogo from 'public/assets/mini_logo.png';

const NotificationList = ({ data }) => {
  return (
    <Wrapper>
      <Title className="py-2 px-4">
        <h6>{data[0]?.title}</h6>
        <a href={data[0]?.href}>TÜM LİSTE</a>
      </Title>
      <Content className="py-3 px-4">
        {data[0]?.list?.map((item, idx) => (
          <List key={idx} className="py-1">
            <ImageWrapper>
              <Image src={MiniLogo} width={65} height={40} />
              <DateArea>{item.date.slice(0, 5)}</DateArea>
            </ImageWrapper>
            <TextArea>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </TextArea>
          </List>
        ))}
      </Content>
    </Wrapper>
  );
};

export default NotificationList;

const Wrapper = styled.div`
  position: relative;
  width: calc(50% - (24px / 2));
  height: min-content;
  background: #fff;
  user-select: none;
  &:last-child {
    flex: 1;
  }
`;

const Title = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #efefef;
  text-transform: uppercase;
  h6 {
    margin: 0;
    font-size: 12px;
    font-weight: bold;
    color: #282a2c;
  }
  a {
    font-size: 10px;
    font-weight: bold;
    color: #4782b2;
  }
`;

const Content = styled.div`
  position: relative;
  height: 90%;
`;

const DateArea = styled.div`
  position: relative;
  width: 65px;
  background-color: #4883b3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 65px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TextArea = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h5,
  p {
    display: inline-block;
    width: calc(100% - 1px);
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    margin: 0;
  }
  h5 {
    font-size: 16px;
    color: #4782b2;
    font-weight: bold;
  }
  p {
    font-size: 12px;
    color: #999;
  }
`;

const List = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 16px;
  &:not(:last-child) {
    border-bottom: 1px dashed #efefef;
  }
`;
