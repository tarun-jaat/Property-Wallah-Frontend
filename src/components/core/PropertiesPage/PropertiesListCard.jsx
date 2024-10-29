import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import ContactModal from "./ContactModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

const PropertiesListCard = ({ property }) => {
  const [open, setOpen] = useState(false);
  const [bhk, setbhk] = useState();
  const {
    address,
    city,
    state,
    price,
    propertyArea,
    propertyName,
    imageProperty,
    propertyId,
    contactNo,
    email,
    propertyOptions,
    propertyType,
  } = property;
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (propertyArea < 750) {
      setbhk(1);
    } else if (propertyArea >= 750 && propertyArea < 1500) {
      setbhk(2);
    } else if (propertyArea >= 1500 && propertyArea < 2500) {
      setbhk(3);
    } else if (propertyArea >= 2500 && propertyArea < 4000) {
      setbhk(4);
    } else if (propertyArea >= 4000 && propertyArea < 5400) {
      setbhk(5);
    } else if (propertyArea >= 5400 && propertyArea < 7000) {
      setbhk(6);
    } else if (propertyArea >= 7000) {
      setbhk(7);
    }
  }, []);

  const handleCardNavigate = () => {
    if (!user) {
      enqueueSnackbar("Login to explore property", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      navigate(`/properties/${propertyId}`);
    }
  };

  const handleContactModalOpen = () => {
    if (!user) {
      enqueueSnackbar("Login to view owner details", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <ContactModal
        open={open}
        setOpen={setOpen}
        contactNo={contactNo}
        email={email}
        propertyName={propertyName}
        price={price}
        propertyArea={propertyArea}
      />
      <Paper
        elevation={1}
        sx={{
          mt: 3,
          borderRadius: 2,
          boxShadow: "0 3px 8px 0 rgba(0,106,194,.2)",
          position: "relative",
        }}
      >
        <img
          src={
            imageProperty === "home"
              ? "assets/propertyTempImage.jpg"
              : imageProperty
          }
          alt="propertyTemp"
          style={{
            borderRadius: 8,
            width: "358px",
            height: "386px",
            objectFit: "cover",
          }}
        />
        <Paper
          variant="outlined"
          sx={{
            position: "absolute",
            right: 0,
            borderRadius: "8px 0px 0px 8px",
            width: "556px",
            padding: "30px 24px",
            top: 0,
            bottom: 0,
            margin: "auto",
            height: "356px",
            border: "none",
          }}
        >
          <Box>
            <Typography
              onClick={() => handleCardNavigate()}
              sx={{
                                fontSize: "14px",
                lineHeight: "20px",
                cursor: "pointer",
              }}
            >
              {bhk} BHK Serviced {propertyType} for {propertyOptions} in {address},{" "}
              {city}
            </Typography>
            <Typography
              onClick={() => handleCardNavigate()}
              sx={{
                                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 700,
                mt: 1,
                color: "#091E42",
                cursor: "pointer",
              }}
            >
              {propertyName}
            </Typography>
            <Box
              onClick={() => handleCardNavigate()}
              sx={{ mt: 1, display: "flex", gap: 8, cursor: "pointer" }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                                            fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    ₹
                    {price >= 1000000
                      ? (price / 1000000).toFixed(1) + "L"
                      : price >= 1000
                      ? (price / 1000).toFixed(1) + "K"
                      : price.toString()}
                  </Typography>
                  <Typography
                    sx={{
                                            fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#42526e",
                    }}
                  >
                    /month
                  </Typography>
                </Box>

                <Typography
                  sx={{
                                        fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  Desposit 2 month(s) rent
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                                            fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    {propertyArea}
                  </Typography>
                  <Typography
                    sx={{
                                            fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#42526e",
                    }}
                  >
                    sq.ft.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                                        fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  ({(propertyArea * 0.092903).toFixed(1)} sq.m.) Super built-up Area
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                                            fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    {bhk} BHK
                  </Typography>
                </Box>

                <Typography
                  sx={{
                                        fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk} Baths
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                mt: 4,
                color: "#091E42",
                mr: 4,
              }}
            >
              Amazing {bhk} bedroom {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk} bathroom {propertyType} in {propertyName} located in {address}, {city}, {state}.
              Utilities include Cable, High Speed Fiber Internet, Electricity, Water Tank and Complete Power Backup and Gas also have {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk}{" "}Balcony, {bhk} Wardrobe, {bhk + 1} Fan, in a pet-friendly society.
              All Rooms are spacious and properly ventilated. Construction Quality is also High End with High Quality Fittings.
            </Typography>
            <Divider sx={{ mt: 3, background: "rgba(0,0,0,0.15)" }} />
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={handleContactModalOpen}
                disableRipple
                sx={{
                  padding: "8px 16px",
                  textTransform: "none",
                                    fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#0078db",
                  mr: 1,
                  ":hover": {
                    background: "#f0f9ff",
                  },
                }}
              >
                View Phone Number
              </Button>
              <Button
                onClick={handleContactModalOpen}
                disableRipple
                variant="contained"
                sx={{
                  padding: "8px 16px",
                  textTransform: "none",
                                    fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#fff",
                  background: "#0078db",
                  ":hover": {
                    background: "#006ac2",
                  },
                }}
              >
                Contact Owner
              </Button>
            </Box>
          </Box>
        </Paper>
      </Paper>
    </>
  );
};

export default PropertiesListCard;
