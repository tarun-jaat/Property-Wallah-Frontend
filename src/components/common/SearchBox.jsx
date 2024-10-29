import {
    Box,
    Button,
    Divider,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useDispatch } from "react-redux";
  import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
  import { useNavigate } from "react-router-dom";
  import { useSnackbar } from "notistack";
  
  // Action should be imported properly
  
  const filter = createFilterOptions();
  
  const optionButtons = [
    "Buy",
    "Rent",
    "PG / Co-living",
    "Commercial",
    "Coworking",
    "Plots/Land",
    "Projects",
  ];
  
  const SearchBox = () => {
    const [value, setValue] = useState(""); // State for input value
    const [city, setCity] = useState(""); // State for city input
    const [searchOption, setSearchOption] = useState(optionButtons[0]); // State for search options
    const [suggestions, setSuggestions] = useState([]); // State for suggestions
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
  
    useEffect(() => {
      if (value !== "") {
        dispatch(searchSuggestions(value)); // Dispatch search suggestions
      }
    }, [value, dispatch]);
  
    const handleSearchClick = () => {
      if (value === "" || city === "") {
        enqueueSnackbar("Enter City for Search", {
          variant: "warning",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      } else {
        navigate("/properties");
      }
    };
  
    return (
      <Paper
        elevation={5}
        sx={{
          background: "#fff",
          borderRadius: "15px",
          width: "60%",
          position: "absolute",
          bottom: 0,
          p: "16px 0px 0px 0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: "0px 16px",
          }}
        >
          {optionButtons.map((btn, index) => (
            <Button
              key={index}
              disableRipple
              onClick={() => setSearchOption(btn)} // Set search option on click
              sx={{
                                textTransform: "capitalize",
                color: searchOption === btn ? "#000" : "#42526E",
                fontSize: "16px",
                fontWeight: 600,
                borderBottom:
                  searchOption === btn ? "3px solid #005CA8" : "3px solid #fff",
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
        <Divider sx={{ background: "rgba(0,0,0,0.08)" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ p: "16px 10px 16px 16px" }}>
            <Typography
              sx={{
                color: "#42526E",
                fontSize: "14px",
                fontWeight: 600,
                              }}
            >
              All Residential
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ background: "rgba(0,0,0,0.08)", ml: 2 }}
          />
          <Autocomplete
            value={city}
            onChange={(event, newValue) => setCity(newValue)} 
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
  
              const { inputValue } = params;
              const isExisting = options.some(
                (option) => inputValue === option.address
              );
              if (inputValue !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  address: `Add "${inputValue}"`,
                });
              }
  
              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={suggestions}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.address;
            }}
            renderOption={(props, option) => (
              <li {...props}>
                {option.address}
              </li>
            )}
            sx={{ width: "70%" }}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                sx={{ ml: 2, width: "95%", fontFamily: "Open Sans" }}
                placeholder={'"search Noida"'}
                onChange={(e) => setValue(e.target.value)} // Update search value on input
              />
            )}
          />
          <Box sx={{ p: "16px" }}>
            <Button
              onClick={handleSearchClick}
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontWeight: 700,
                              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Paper>
    );
  };
  
  export default SearchBox;
  