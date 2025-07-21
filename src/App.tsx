import QrcodeImage from "./assets/images/image-qr-code.png";
function App() {
  return (
    <article className="qrcode">
      <figure className="qrcode--figure">
        <img alt="qrcode" src={QrcodeImage} />
      </figure>
      <div className="qrcode--details">
        <h1 className="qrcode--details--title">
          Improve your front-end skills by building projects
        </h1>
        <p className="qrcode--details--description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  );
}

export default App;
