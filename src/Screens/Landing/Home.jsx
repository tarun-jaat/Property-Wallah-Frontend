import React from "react";
import { Navbar } from "../../components/common/Navbar";
import SearchBox from "../../components/common/SearchBox";
import { Box } from "@mui/material";
import Recommend from "../../components/core/LandingPage/Recommend";
import HomesByFurnishing from "../../components/core/LandingPage/HomesByFurnishing";
import { ArrowCircleUp } from "@mui/icons-material";
import GetStarted from "../../components/core/LandingPage/GetStarted";
import SearchModal from "../../components/core/LandingPage/SearchModal";
import MiddleSection from "../../components/core/LandingPage/Explore";
import PropertySection from "../../components/core/LandingPage/BHKSSection";
import BottomSection from "../../components/core/LandingPage/PopularCities";
import Footer from "../../components/core/LandingPage/Footer";
import { useSelector } from "react-redux";
function Home() {
  const { pwUser } = useSelector((state) => state.profile);

  return (
    <div className="w-full">
      <Box
        id="back-to-top-anchor"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          minHeight: "55vh",
          width: "100",
        }}
      >
        <Navbar />
        <img
          src="https://wallup.net/wp-content/uploads/2019/09/760050-apartment-condo-interior-design-house-building-architecture-1.jpg"
          alt="nav-home"
          style={{
            maxHeight: "45vh",
            zIndex: 0,
            objectFit: "cover",
            position: "absolute",
            width: "100%",
          }}
        />
        <SearchBox />
        <SearchModal />
      </Box>
      <GetStarted />
      <div className="mt-12 relative pt-7 w-full flex items-center justify-center bg-white">
        <Recommend />
      </div>
      <div className="mt-4 pt-7 w-full overflow-hidden flex items-center justify-center backgroundTexture">
        <HomesByFurnishing />
      </div>
      <div className="mt-4 pt-7 overflow-hidden flex items-center justify-center backgroundTexture">
       { pwUser ?(null):(<MiddleSection />
       )} 
      </div>
      <div className="mt-4 pt-7 overflow-hidden flex items-center justify-center backgroundTexture">
        <PropertySection />
      </div>
      <BottomSection />
      <Footer />
    </div>
  );
}

export default Home;
