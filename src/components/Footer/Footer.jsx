import styles from "./Footer.module.css";
import instagram from "../../assets/icon_instagram.svg";
import whatsapp from "../../assets/icon_whatsapp.svg";
import HeaderCategory from "../HeaderCategory/HeaderCategory";

function Footer() {
  return (
    <div>
      <HeaderCategory nameCategory="Contact" />
      <div className={styles.footer_container}>
        <div className={styles.footer_info_container}>
          <div className={styles.footer_block}>
            <p className={styles.footer_title}>Phone</p>
            <p className={styles.footer_info}>+49 30 915-88492</p>
          </div>
          <div className={styles.footer_block}>
            <p className={styles.footer_title}>Socials</p>
            <div className={styles.footer_logo}>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram_logo" />
              </a>
              <a href="https://web.whatsapp.com/">
                <img src={whatsapp} alt="whatsapp_logo" />
              </a>
            </div>
          </div>
          <div className={styles.footer_block}>
            <p className={styles.footer_title}>Address</p>
            <p className={styles.footer_info}>
              Wallstraẞe 9-13, 10179 Berlin, Deutschland
            </p>
          </div>
          <div className={styles.footer_block}>
            <p className={styles.footer_title}>Working Hours</p>
            <p className={styles.footer_info}>24 hours a day</p>
          </div>
        </div>
        <div className={styles.footer_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8167.09223798018!2d13.400367291539032!3d52.513691302637845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1ec5aaec63%3A0x64c05944f0f0b808!2sCHECK24%20Berlin%20(Wallstra%C3%9Fe)!5e0!3m2!1sru!2sde!4v1733588621842!5m2!1sru!2sde=en"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
