function Icon({ type, style }) {
  return <img src={`/assets/icon/${type}.png`} alt={type} style={style} />;
}

export default Icon;
