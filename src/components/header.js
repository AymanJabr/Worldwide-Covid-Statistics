import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className="Navigation ">
        <Link to="/">Home  </Link>
      </div>

    </div>
  );
}

export default Header;
