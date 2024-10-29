import React, { useState, useEffect } from "react";
import {
  Button,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "../../assets/Logo.svg";
import LoginModal from "../core/Auth/LoginRegister";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Services/Operations/AuthServices";
import { LocationOnTwoTone, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { openSearchModal } from "../../Redux/SearchModalSlice";
export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [propertyMenuAnchorEl, setPropertyMenuAnchorEl] = useState(null);
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { pwUser } = useSelector((state) => state.profile);
  const { selectedCity } = useSelector((state) => state.selectedCity);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePropertyMenuClick = (event) => {
    setPropertyMenuAnchorEl(event.currentTarget);
  };

  const handlePropertyMenuClose = () => {
    setPropertyMenuAnchorEl(null);
  };

  const handlePropertyMenuItemClick = (option) => {
    setSelectedOption(option);
    handlePropertyMenuClose();
  };

  const handleAccountMenuClick = (event) => {
    setAccountMenuAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuAnchorEl(null);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    handleAccountMenuClose();
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout(navigate));
    handleAccountMenuClose();
  };

  const residentialOptions = ["Buy", "Rent", "PG", "Projects"];

  return (
    <div
      className={`flex-between fixed transition-all z-50 w-full ease-in-out px-3 duration-300 h-16 ${
        scrolled ? "bg-blue-500" : "bg-transparent"
      }`}
    >
      <div className="flex gap-6 items-end justify-center text-white">
        <img src={Logo} className=" cursor-pointer" alt="Logo" />
        <p
          onClick={() => dispatch(openSearchModal())}
          className=" cursor-pointer pb-2 font-bold"
        >
          {selectedCity}
          <LocationOnTwoTone />
        </p>
      </div>

      {scrolled && (
        <div className="flex items-center space-x-4 pl-2 bg-white rounded-lg shadow-md w-full max-w-4xl">
          <Button
            onClick={handlePropertyMenuClick}
            endIcon={<ExpandMoreIcon />}
            className="text-white px-4 py-2 rounded-l-lg"
          >
            {selectedOption}
          </Button>

          <TextField
            fullWidth
            placeholder="Enter Locality / Project / Society / Landmark"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="rounded-r-lg"
          />

          <Menu
            anchorEl={propertyMenuAnchorEl}
            open={Boolean(propertyMenuAnchorEl)}
            onClose={handlePropertyMenuClose}
          >
            <div className="px-4 py-2 font-bold">Residential</div>
            {residentialOptions.map((option) => (
              <MenuItem
                key={option}
                selected={option === selectedOption}
                onClick={() => handlePropertyMenuItemClick(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button
          disableRipple
          variant="contained"
          sx={{
            textTransform: "none",
            mr: 2,
            background: "#fff",
            color: "#000",
            borderRadius: "10px",
            fontWeight: 600,
            p: "3px 16px",
            ":hover": {
              background: "#fff",
              color: "#000",
            },
          }}
        >
          Post property
          <Chip
            color="success"
            size="small"
            label="Free"
            sx={{
              ml: 1,
              borderRadius: "4px",
              p: 0,
              textTransform: "uppercase",
              fontSize: "10px",
              height: "17px",
              display: "flex",
              alignItems: "center",
            }}
          />
        </Button>

        {pwUser ? (
          <img
            onClick={handleAccountMenuClick}
            className="h-8 cursor-pointer rounded-full"
            src={pwUser.image || AccountCircle}
            alt="User"
          />
        ) : (
          <IconButton
            size="large"
            aria-label="account of current pwUser"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleAccountMenuClick}
          >
            <AccountCircle />
          </IconButton>
        )}

        <Menu
          id="menu-appbar"
          anchorEl={accountMenuAnchorEl}
          open={Boolean(accountMenuAnchorEl)}
          onClose={handleAccountMenuClose}
        >
          {pwUser ? (
            <>
              <MenuItem disabled sx={{ fontSize: 12, fontWeight: 700 }}>
                Your Profile
              </MenuItem>
              <MenuItem sx={{ color: "#2c608a", fontSize: 12 }}>
                My Properties
              </MenuItem>
              <MenuItem sx={{ color: "#2c608a", fontSize: 12 }}>
                Profile
              </MenuItem>
              <MenuItem sx={{ color: "#2c608a", fontSize: 12 }}>
                Settings
              </MenuItem>
            </>
          ) : (
            <MenuItem
              onClick={openLoginModal}
              sx={{ color: "#2c608a", fontWeight: 700 }}
            >
              Login / Register
            </MenuItem>
          )}

          <MenuItem disabled sx={{ fontSize: 12, fontWeight: 700 }}>
            Your Activities
          </MenuItem>
          <MenuItem sx={{ fontSize: 10, fontWeight: 40, textAlign: "right" }}>
            Recent Searched
          </MenuItem>
          <MenuItem sx={{ fontSize: 10, fontWeight: 40, textAlign: "right" }}>
            Recent Viewed
          </MenuItem>

          {pwUser && (
            <MenuItem
              onClick={handleLogout}
              sx={{
                display: "flex",
                gap: 2,
                background: "#F5D1D1",
                color: "#A10000",
                fontWeight: 700,
              }}
            >
              Logout <Logout />
            </MenuItem>
          )}
        </Menu>
        <Menu>
          
        </Menu>

        {scrolled && (
          <div
            id="back-to-top"
            className="fixed bottom-2 right-10 cursor-pointer bg-blue-500 text-white rounded-full p-2 transition duration-200 ease-in-out transform hover:scale-125"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowCircleUp/>
          </div>
        )}
        <LoginModal open={isLoginModalOpen} handleClose={closeLoginModal} />
      </div>
    </div>
  );
};
