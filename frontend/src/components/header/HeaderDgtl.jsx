import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogoArka from "../../../public/logo/LogoArka.jsx";
import photo from "../../../public/images/homepage/follow5.png"

const HeaderDgtl = () => {
  const { activeUser } = useSelector((state) => state.user);

  const yetkiFunc = (number) => {
    if (number === 1) {
      return "Admin";
    }
    if (number === 2) {
      return "Editor";
    }
    if (number === 3) {
      return "Kullanıcı";
    }
    return "Bilinmiyor"; 
  };

  const yetki = activeUser ? yetkiFunc(activeUser.accessLevel) : null;

  return (
    <header className="relative w-screen max-w-[1920px] h-[96px] flex items-center top-0">
      <LogoArka
        className="absolute inset-0 w-full h-full"
        color="black"
        width="1920"
        height="96"
      />

      {/* Logo ve Navigasyon */}
      <div className="relative flex items-center justify-between w-full h-full px-8 font-monserrat text-[16px] text-white font-medium">
        {/* Logo */}
        <Link to="/panel">
          <img
            src="/logo/DgtlLogoRenk.png"
            className="h-[40px] ml-[20px]"
            alt="DGTLFACELOGO"
          />
        </Link>
        <div className="flex items-center justify-center gap-12">
        <Link className="hover:bg-white hover:text-[#0e0c1b] py-1 px-2 rounded-md" to='/'>Ana Sayfa</Link>
        <Link className="hover:bg-white hover:text-[#0e0c1b] py-1 px-2 rounded-md" to="/panel">Panel</Link>
        <Link className="hover:bg-white hover:text-[#0e0c1b] py-1 px-2 rounded-md" to="/panel/profil">Yetki: {yetki ? yetki  : "Bilinmiyor"}</Link>
        <Link className="hover:bg-white hover:text-[#0e0c1b] py-1 px-2 rounded-md" to="/panel/">Yetki: {yetki ? activeUser.accessLevel   : "Bilinmiyor"}</Link>
        <div className="flex items-center justify-center gap-1">
          <img src={photo} alt="profile" width={photo.width} height={photo.height} className="w-[50px] h-[50px] rounded-full"/>
        <Link className="hover:bg-white hover:text-[#0e0c1b] py-1 px-2 rounded-md capitalize" to="/panel/profil">{activeUser.name}</Link>
        </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDgtl;
