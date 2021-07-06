import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <div className="Header">
      <div className="Navigation ">
        <Link to="/">Go back to all countries  </Link>
      </div>

    </div>
  );
}

export default Header;
