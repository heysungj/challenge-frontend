import "./Header.css";
import logo from "./img0.png";

export default function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <h2>Welcome to the Bakery's Kitchen</h2>
    </div>
  );
}
