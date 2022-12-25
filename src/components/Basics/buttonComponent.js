export default function buttonComponent(props) {
  const { content, color, isGlow = true, classAdd = '' } = props;
  let boxShadow;
  isGlow ? (boxShadow = '0px 0px 15px 3px ' + color) : (boxShadow = 'none');
  const style = {
    backgroundColor: color,
    boxShadow,
  };
  return (
    <button
      className={`custom-button p-md-2 rounded-pill ` + classAdd}
      style={style}
    >
      {content}
    </button>
  );
}
