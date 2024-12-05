import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logOutError, logOutStart, logOutSuccess } from "../../redux/userSlice";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useSelector } from 'react-redux';

const PanelSideBar = () => {
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const { activeUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(logOutStart());
    const response = await fetch("/api/giris/cikis");
    const data = await response.json();
    if (data.success === false) {
      dispatch(logOutError(data.message));
      return;
    }
    dispatch(logOutSuccess(data));
  };

  return (
    <section className="flex">
      <aside className="flex flex-col items-center w-[10%] bg-[#0e0c1b] p-[15px]">
        <nav className="flex flex-col items-start w-full gap-[10px]">
          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[15px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel">Panel</NavLink>
          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[15px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel/dashboard">Dashboard</NavLink>
          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[15px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel/yeniblogekle">Yeni Blog Ekle</NavLink>
          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[15px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel/bloglar">Bloglar</NavLink>
          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[15px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel">Kullanıcıları Yönet</NavLink>
          <a className="flex items-center w-[90%] text-white font-monserrat text-[15px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" href="#" onClick={handleLogOut}>
            Çıkış Yap
          </a>
        </nav>
      </aside>
      <main className="m-0 p-0 border-box w-full ">
          <Outlet></Outlet>
      </main>
    </section>
  );
};

export default PanelSideBar;
