import { styled } from 'styled-components';

function ImgWithSrc({ src, width, height }) {
  return <St.Image width={width} height={height} src={src} alt={src} />;
}

export default ImgWithSrc;

const St = {
  Image: styled.div`
    background-image: url(${({ src }) => src});
    background-size: cover;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `,
};
