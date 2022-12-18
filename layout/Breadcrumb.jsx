import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdArrowDropright } from 'react-icons/io';
import styled from 'styled-components';

const Breadcrumb = () => {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    asPath !== '/' && (
      <Wrapper className="d-flex gap-3 justify-content-start my-4">
        <Link href="/">
          <p className="m-0">Anasayfa</p>
        </Link>
        <IoMdArrowDropright size={24} />
        <Link href={asPath}>
          <b className="m-0">
            {asPath === '/contact' ? 'İletişim' : 'Duyurular'}
          </b>
        </Link>
      </Wrapper>
    )
  );
};

export default Breadcrumb;

const Wrapper = styled.section`
  position: relative;
  width: 1080px;
`;
