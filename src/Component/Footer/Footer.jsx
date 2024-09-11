import "./footer.css";
import { images } from "./data";
import logo from "../../assets/logo_full.png";

const Footer = () => {
  return (
    <div className="footer__container" data-scroll-section>
      <div className="max-container padding">
        <div className="flex flex-col gap3 ">
          <p className="text-lg text-primary-white">ready to collaborate?</p>
          <p className="text-8xl text-primary-white font-bold tracking-tighter">
            code@jayaintegrasi.id
          </p>
        </div>
        <div className="image__container flex flex-row justify-between items-center self-end mt-60">
          <div className="flex flex-row gap-5">
            {" "}
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} width="30" height="30" />
              </div>
            ))}
          </div>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
