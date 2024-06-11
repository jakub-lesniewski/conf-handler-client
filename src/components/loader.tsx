const loaderStyle = {
  width: "48px",
  height: "48px",
  display: "flex",
  transformOrigin: "50% 125%",
  animation: "mov-y 1s infinite linear",
};

const loaderBeforeAfterStyle = {
  content: '""',
  flex: 1,
  background: "hsl(var(--primary))",
  transformOrigin: "0% 100%",
  animation: "rtr-x 1s infinite linear",
};

const loaderBeforeStyle = {
  transformOrigin: "100% 100%",
  animationName: "rtr-rx",
};

const keyframes = `
  @keyframes mov-y {
    0%, 25% { transform: translateY(0) scaleY(1); }
    49% { transform: translateY(-75%) scaleY(1); }
    50% { transform: translateY(-75%) scaleY(-1); }
    75%, 100% { transform: translateY(-150%) scaleY(-1); }
  }

  @keyframes rtr-x {
    25%, 75% { transform: rotate(0deg); }
    50% { transform: rotate(90deg); }
  }

  @keyframes rtr-rx {
    25%, 75% { transform: rotate(0deg); }
    50% { transform: rotate(-90deg); }
  }
`;

export default function Loader() {
  return (
    <div style={loaderStyle} className="my-auto">
      <style>{keyframes}</style>
      <div style={{ ...loaderBeforeAfterStyle, ...loaderBeforeStyle }}></div>
      <div style={loaderBeforeAfterStyle}></div>
    </div>
  );
}
