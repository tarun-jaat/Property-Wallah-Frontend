import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PropertiesListCard from "./PropertiesListCard";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProperties } from "../../redux/SearchBox/SearchSlice";

const PropertiesListSection = () => {
  const {
    budgetRange,
    propertyType,
    area,
    city,
    properties,
    searchOption,
    isPropertyLoading,
  } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const filters = {
      minPrice: budgetRange[0],
      maxPrice: budgetRange[1],
      minArea: area[0],
      maxArea: area[1],
      City: city,
      PropertyType: propertyType,
    };
    dispatch(getFilteredProperties(filters));
  }, [budgetRange[0], budgetRange[1], area[0], area[1], city, propertyType]);

  console.log(properties);
  console.log(propertyType);

  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: 600,
          color: "#091E42",
                  }}
      >
        {properties.length} results | Property for {searchOption} in{" "}
        {city.address === undefined ? "India" : city.address}
      </Typography>

      {isPropertyLoading ? (
        <CircularProgress />
      ) : (
        properties.map((property) => (
          <React.Fragment key={property.propertyId}>
            <PropertiesListCard property={property} />
          </React.Fragment>
        ))
      )}
    </Box>
  );
};

export default PropertiesListSection;
