import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="aboutOdinShop">
        <h3>About OdinShop</h3>
        <p>
          At OdinShop, we are committed to delivering the best shopping
          experience. Explore our curated collection of electronics, fashion,
          and home essentials. Quality and customer satisfaction are at the
          heart of everything we do.
        </p>
      </div>

      <div className="quickLinks">
        <h3>Quick Links</h3>
        <Link href="/shop">Shop</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Help</Link>
        <Link href="/">FAQs</Link>
        <Link href="/">Returns & Shipping</Link>
      </div>

      <div className="contactInfo">
        <h3>Contact Us</h3>
        <p>
          Email: <Link href="/">support@odinshop.com</Link>
        </p>
        <p>
          Phone: <Link href="/">+1 (234) 567-890</Link>
        </p>
        <p>Address: 123 Odin Street, Valhalla City, Norseland</p>
        <div className="socialMedia">
          <h4>Follow Us:</h4>
          <a
            href="https://github.com/devashishchakraborty/shopping-cart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          &nbsp;|&nbsp;
          <Link to="/" target="_blank" rel="noopener noreferrer">
            Twitter
          </Link>
          &nbsp;|&nbsp;
          <Link to="/" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
