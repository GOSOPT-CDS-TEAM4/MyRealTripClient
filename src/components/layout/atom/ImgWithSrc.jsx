import { styled } from 'styled-components';

function ImgWithSrc({ src, width, height }) {
  return <St.Image width={width} height={height} src={src} alt={src} />;
}

export default ImgWithSrc;

const St = {
  Image: styled.img`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `,
};
