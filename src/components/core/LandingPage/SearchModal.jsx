import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchModal } from "../../../Redux/SearchModalSlice";
import { Button, Divider, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { setSelectedCity } from "../../../Redux/SelectedCity";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "60px",
  left: "30px",
  width: "680px",
  height: "442px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const optionButtons = ["Buy", "Rent / Lease", "Plots/Land", "PG / Co-living"];

export default function SearchModal() {
  const { open } = useSelector((store) => store.searchModal);
  const { properties } = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => dispatch(closeSearchModal());

  const [suggestions, setSuggestions] = useState([]);
  const [searchOption, setSearchOption] = useState(optionButtons[0]);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (properties && properties.length > 0) {
      // Extract unique cities from properties
      const uniqueCities = [
        ...new Set(properties.map((property) => property.location.state)),
      ];
      setSuggestions(uniqueCities);
    }
  }, [properties]); // Trigger when properties change

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{
                color: "#041533",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "48px",
              }}
            >
              Explore real estate in...
            </Typography>
            <Box sx={{ display: "flex", mt: 4, gap: 3 }}>
              {optionButtons.map((btn, index) => (
                <Button
                  key={index}
                  onClick={() => setSearchOption(btn)}
                  disableRipple
                  sx={{
                    textTransform: "capitalize",
                    color: searchOption === btn ? "#000" : "#8993A4",
                    fontSize: "14px",
                    fontWeight: 400,
                    borderBottom:
                      searchOption === btn
                        ? "3px solid #005CA8"
                        : "3px solid #fff",
                    borderRadius: 0,
                    ":hover": {
                      background: "#fff",
                    },
                    paddingBottom: 2,
                  }}
                >
                  {btn}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: "0 3px 8px 0 rgba(0,106,194,0.2)",
                borderRadius: 1,
              }}
            >
              <Box sx={{ p: "13px 10px 13px 13px" }}>
                <Typography
                  sx={{
                    color: "#253858",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 600,
                  }}
                >
                  Residential
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                sx={{ background: "rgba(0,0,0,0.08)", ml: 2 }}
              />
              <Autocomplete
                value={city}
                onChange={(event, newValue) => {
                  setCity(newValue);
                  if (newValue) {
                    dispatch(setSelectedCity(newValue));
                  }
                }}
                id="free-solo-with-text-demo"
                options={suggestions}
                sx={{ width: "70%" }}
                freeSolo
                noOptionsText="No city found" 
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    sx={{ ml: 2, width: "95%", fontFamily: "Open Sans" }}
                    placeholder='Search City (e.g., "Noida")'
                  />
                )}
              />

              <Divider
                orientation="vertical"
                sx={{ background: "rgba(0,0,0,0.08)", ml: 2 }}
              />
              <Box sx={{ p: "16px" }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                  }}
                  onClick={() => navigate('/properties')}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
