import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import LoginModal from "../core/Auth/LoginRegister";


function SideMenu({ open, onClose }) {
  const { pwUser } = useSelector((state) => state.profile);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <CSSTransition in={open} timeout={500} classNames="slide" unmountOnExit>
      <div className="w-[300px] fixed shadow-xl top-16 h-[92vh] right-0 rounded-l-lg bg-white">
        <div className="flex relative flex-col h-full ">
          <button
            onClick={onClose}
            className="text-gray-500 absolute top-2 right-4 hover:text-gray-800"
          >
            &#x2715;
          </button>
          <div className="flex flex-col h-full overflow-y-auto">
            {pwUser ? (
              <div className="flex items-center gap-2">{pwUser.name}</div>
            ) : (
              <button
                onClick={openLoginModal}
                className="flex bg-blue-100 p-2 py-4 font-bold text-cyan-600 items-center gap-2"
              >
                Login / Register
              </button>
            )}
          </div>
        </div>
        <LoginModal open={isLoginModalOpen} handleClose={closeLoginModal} />
      </div>
    </CSSTransition>
  );
}

export default SideMenu;
