import logo from "../assets/yxra.png";

function Footer() {
  return (
    <footer>
      <img id="yxra-logo-footer" src={logo} alt="Yxra Logo" />
      <div>
        <ul id="nav-link">
          <li className="nav-link">About</li>
          <li className="nav-link">Policy</li>
          <li className="nav-link">Work with Us</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">Newsletter</li>
        </ul>
        <span id="footer-line"></span>
        <ul id="nav-link">
          <li className="nav-link">Instagram</li>
          <li className="nav-link">Twitter</li>
          <li className="nav-link">Facebook</li>
          <li className="nav-link">TikTok</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
