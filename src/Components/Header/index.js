import "./HeaderCss.css";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <a className="logo">Logo</a>
      <div className="header-right">
        <Link to="/" className="active">Home</Link>
      </div>
    </div>
  );
};

export default Header;
