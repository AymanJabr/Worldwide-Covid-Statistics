import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className="Navigation ">
        <Link to="/">All Countries  </Link>
      </div>

    </div>
  );
}

export default Header;
