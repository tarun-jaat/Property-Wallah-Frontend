import {
    Box,
    Container,
    IconButton,
    Paper,
    Typography,
  } from "@mui/material";
  import React from "react";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import { useNavigate } from "react-router-dom";
  import { useSelector } from "react-redux";
  import { useSnackbar } from "notistack";
import CarouselComponent from "../../common/CarouselComponent";
  
  const GetStarted = ({ openModal }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
  
    const handleClick = () => {
        navigate("/polotno-editor");
    };
  
    return (
      <Container sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            onClick={handleClick}
            elevation={0}
            sx={{
              background: "#d7f2e380",
              padding: "38px 16px",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              width: "75%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="assets/imageEditorIcon.webp" alt="ImageEditorIcon" />
              <Box sx={{ ml: 6 }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontWeight: 600,
                    color: "#041533",
                  }}
                >
                  Want to attract buyers? Enhance your images.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 400,
                    color: "#42526e",
                  }}
                >
                  You can do so easily using our editor tool.
                </Typography>
              </Box>
              <IconButton
                disableRipple
                sx={{
                  ml: 10,
                  background: "#ceeddc",
                  padding: "12px",
                  ":hover": { background: "#ceeddc" },
                }}
              >
                <ArrowForwardIcon sx={{ color: "#000" }} />
              </IconButton>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Typography>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <CarouselComponent />
        </Box>
      </Container>
    );
  };
  
  export default GetStarted;
  