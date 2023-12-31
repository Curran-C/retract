import {
  fbdark,
  instagramdark,
  linkedindark,
  twitterdark,
} from "../../assets/footer";
import AboveFooterImages from "../AboveFooterImages/AboveFooterImages";
import Button from "../Button/Button";
import FooterLinks from "../FooterLinks/FooterLinks";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
          vulputate eu vitae tristique.
        </p>

        <FooterLinks title={"General"} links={["About Us", "Pricing"]} />
        <FooterLinks
          title={"Policies"}
          links={[
            "Security safeguards",
            "Terms of service",
            "Privacy",
            "Accessibility",
          ]}
        />
        <AboveFooterImages
          title={"Get In Touch"}
          subtitle={
            "Follow us on social media and stay updated with the latest information about our services"
          }
          images={[fbdark, instagramdark, twitterdark, linkedindark]}
        />

        <div className="subscribe">
          <AboveFooterImages
            title={"Subscribe to our Lorem"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur. Velit enim est urna est massa cras. Sed varius convallis netus aliquet duis ut. "
            }
          />
          <form className="input">
            <input type="email" name="" id="" />
            <Button text={"Join Now"} />
          </form>
        </div>
      </div>
      <p className="rights">2023 - All right reserved</p>
    </div>
  );
};

export default Footer;
