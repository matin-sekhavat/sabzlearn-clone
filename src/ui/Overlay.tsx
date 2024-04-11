type overlayProps = {
  isShow: boolean;
};
function Overlay({ isShow }: overlayProps) {
  return <div className={`overlay ${isShow ? "open" : ""}`}></div>;
}

export default Overlay;
