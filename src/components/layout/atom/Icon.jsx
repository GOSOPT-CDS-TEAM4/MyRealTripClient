function Icon({ type, style, onClick }) {
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return <img src={`/assets/icon/${type}.png`} alt={type} style={style} onClick={onClick} />;
}

export default Icon;
