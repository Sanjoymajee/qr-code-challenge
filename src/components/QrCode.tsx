import "../styles/QrCode.css";

export default function QrCode() {
  return (
    <>
      <div className="qr__container">
        <div className="qr__card">
          <img src="/image-qr-code.png" alt="Qr_code" />
          <div className="qr__text">
            <p className="main__text">
              Improve your front-end skills by building projects
            </p>
            <p className="sub__text">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/Sanjoymajee">Sanjoy Majee</a>.
      </div>
    </>
  );
}
