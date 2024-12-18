import React from "react";
import { Link } from "react-router-dom";
import LogoArka from "../../../public/logo/LogoArka.jsx";

const HeaderDgtl = () => {
  return (
    <header className="relative w-screen max-w-[1920px] h-[96px] flex items-center top-0">
      <LogoArka
        className="absolute inset-0 w-full h-full"
        color="black"
        width="1920"
        height="96"
      />

      {/* Logo ve Navigasyon */}
      <div className="relative flex items-center w-full h-full px-8">
        {/* Logo */}
        <Link to="/panel">
          <img
            src="/logo/DgtlLogoRenk.png"
            className="h-[40px] ml-[20px]"
            alt="DGTLFACELOGO"
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderDgtl;
