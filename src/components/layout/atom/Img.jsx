import { styled } from 'styled-components';

function Img({ type, width, height }) {
  return <St.Image width={width} height={height} src={`/assets/img/${type}.png`} alt={type} />;
}

export default Img;

const St = {
  Image: styled.img`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `,
};
