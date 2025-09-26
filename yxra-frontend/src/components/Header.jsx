import logo from "../assets/yxra.png";
function Header() {
  return (
    <header>
      <div></div>
      <img src={logo} alt="Yxra Logo" />
      <ul id="nav-link">
        <li className="nav-link">Home</li>
        <li className="nav-link">Shop All</li>
        <li className="nav-link">Brands</li>
        <li className="nav-link">Log in</li>
      </ul>
    </header>
  );
}

export default Header;
