import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DarkTypography from "../../common/DarkTypography";
import LightTypography from "../../common/LightTypography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { openSearchModal } from "../../../Redux/SearchModalSlice";

const citiesList = [
  {
    src1: "assets/HomeCitiesImage/delhi-ncr.jpg",
    text1: "Delhi / NCR",
    text2: "16000+ Properties",
    src2: "assets/HomeCitiesImage/Mumbai.jpg",
    text3: "Mumbai",
    text4: "98000+ Properties",
  },
  {
    src1: "assets/HomeCitiesImage/bangalore.jpg",
    text1: "Bangalore",
    text2: "48000+ Properties",
    src2: "assets/HomeCitiesImage/hyderabad.jpg",
    text3: "Hyderabad",
    text4: "32000+ Properties",
  },
  {
    src1: "assets/HomeCitiesImage/pune.jpg",
    text1: "Pune",
    text2: "49000+ Properties",
    src2: "assets/HomeCitiesImage/kolkata.jpg",
    text3: "Kolkata",
    text4: "32000+ Properties",
  },
  {
    src1: "assets/HomeCitiesImage/chennai.jpg",
    text1: "Chennai",
    text2: "37000+ Properties",
  },
];

const Card = ({ src, text1, text2 }) => {
  const dispatch = useDispatch();
  return (
    <Box
      onClick={() => dispatch(openSearchModal())}
      sx={{ display: "flex", alignItems: "center", mb: 2, cursor: "pointer" }}
    >
      <img
        src={src}
        alt="citiesImage"
        style={{
          width: "100px",
          height: "98px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <Box>
        <Typography
          sx={{
            mt: 1,
            ml: 3,
            color: "#041533",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
                      }}
        >
          {text1}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            ml: 3,
            color: "#8993A4",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "20px",
                      }}
        >
          {text2}
        </Typography>
      </Box>
    </Box>
  );
};

const CommercialCard = ({
  bgColor,
  lightText,
  titleText1,
  titleText2,
  subline1,
  subline2,
  btnText,
}) => {
  const dispatch = useDispatch();

  return (
    <Box
      onClick={() => dispatch(openSearchModal())}
      sx={{
        minWidth: "512px",
        minHeight: "450px",
        borderRadius: "8px",
        background: bgColor,
        cursor: "pointer",
      }}
    >
      <Box sx={{ padding: "80px 64px" }}>
        <LightTypography text={lightText} fontSize="14px" />
        <Typography
          sx={{
            mt: 1,
            color: "#041533",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "48px",
                      }}
        >
          {titleText1} <br /> {titleText2}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            color: "#253858",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
                      }}
        >
          {subline1}
          <br /> {subline2}
        </Typography>
        <Button
          onClick={() => dispatch(openSearchModal())}
          disableRipple
          sx={{
            mt: 3,
            background: "#0078DB",
            padding: "16px 24px",
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 700,
            color: "#fff",
                        textTransform: "capitalize",
            ":hover": {
              background: "#006AC2",
            },
          }}
        >
          {btnText}
        </Button>
      </Box>
    </Box>
  );
};

const WhyChoose = ({ text1, text2 }) => {
  return (
    <Box>
      <Typography
        sx={{
          mt: 1,
          color: "#041533",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "28px",
                  }}
      >
        {text1}
      </Typography>
      <Typography
        sx={{
          mt: 1,
          color: "#8993A4",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
                  }}
      >
        {text2}
      </Typography>
    </Box>
  );
};

const BottomSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container
      sx={{
        mb: 5,
      }}
    >
      <Box sx={{ mb: 4 }}>
        <LightTypography text={"TOP CITIES"} />
        <DarkTypography
          text1={"Explore Real Estate in Popular Indian Cities"}
          textAlign="left"
        />
      </Box>
      <Carousel responsive={responsive}>
        {citiesList.map((city, index) => (
          <Box key={index}>
            <Card src={city.src1} text1={city.text1} text2={city.text2} />
            {index !== 3 && (
              <Card src={city.src2} text1={city.text3} text2={city.text4} />
            )}
          </Box>
        ))}
      </Carousel>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LightTypography text={"COMMERCIAL SPACES"} />
        <DarkTypography
          text1={"Choose from a wide variety of"}
          text2={"commercial properties"}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 3,
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <CommercialCard
          bgColor="#fff5e4"
          lightText="BUY FOR COMMERCIAL USE"
          titleText1="Buy a Commercial"
          titleText2="property"
          subline1="Explore from Office Spaces, Co-working spaces,"
          subline2="Retail Shops, Land, Factories and more"
          btnText="Explore Buying Commercial"
        />
        <CommercialCard
          bgColor="#F0F9FF"
          lightText="LEASE FOR COMMERCIAL USE"
          titleText1="Lease a Commercial"
          titleText2="property"
          subline1="Explore from Office Spaces, Co-working spaces,"
          subline2="Retail Shops, Land, Factories and more"
          btnText="Explore Leasing Commercial"
        />
      </Box>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LightTypography text={"BENEFITS OF Property Wallah"} />
        <DarkTypography text1={"Why choose Property Wallah"} />
      </Box>
      <Grid container spacing={4} sx={{ display: "flex", mt: 4 }}>
        <Grid item md={4}>
          <WhyChoose
            text1="Over 12 Lac properties"
            text2="10,000+ properties are added every day"
          />
        </Grid>
        <Grid item md={4}>
          <WhyChoose
            text1="Verification by Property Wallah team"
            text2="Photos / Videos and other details are verified on location"
          />
        </Grid>
        <Grid item md={4}>
          <WhyChoose
            text1="Large user base"
            text2="High active user count and user engagement to find and close deals"
          />
        </Grid>
      </Grid>

    </Container>
  );
};

export default BottomSection;
