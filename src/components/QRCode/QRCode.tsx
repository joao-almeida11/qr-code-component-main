import QRCodeImage from "../../assets/images/image-qr-code.png";

export default function QRCode() {
  return (
    <article className="QRcode">
      <figure className="QRcode--figure">
        <img alt="QRcode" src={QRCodeImage} />
      </figure>
      <div className="QRcode--details">
        <h1 className="text-preset-1 QRcode--details--title">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-preset-2 QRcode--details--description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  );
}
