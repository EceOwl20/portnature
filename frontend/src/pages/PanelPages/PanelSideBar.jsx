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
    <section className="flex flex-col">
      <aside className="flex flex-col items-center w-[10%] bg-[#0e0c1b] p-[15px] h-[100vh]">
        <nav className="flex flex-col items-start w-full gap-[10px]">
          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[20px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel">Panel</NavLink>
          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[20px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel">Dashboard</NavLink>

          <NavLink className="flex items-center w-[90%] text-white font-monserrat text-[20px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" to="/panel">Kullanıcıları Yönet</NavLink>
          <a className="flex items-center w-[90%] text-white font-monserrat text-[20px] rounded-lg p-[7px] cursor-pointer hover:bg-white hover:text-[#0e0c1b]" href="#" onClick={handleLogOut}>
            Çıkış Yap
          </a>
        </nav>
      </aside>
      <div className="flex w-[100%] bg-[#6b81a5] text-white">
       
      </div>
    </section>
  );
};

export default PanelSideBar;
