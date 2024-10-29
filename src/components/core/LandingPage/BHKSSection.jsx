import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const PropertySection = () => {
  const bhkOptions = [
    { type: "3 BHK", properties: 4 },
    { type: "4 BHK", properties: 4 },
    { type: "4+ BHK", properties: 1 },
  ];

  return (
    <div className="p-6 w-[75%] bg-yellow-50">
      <div className="mb-8 bg-[#fff5e4] rounded-2xl p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-orange-100 p-4 rounded-full">
            <img
              src="https://static.99acres.com/universalapp/img/hp_bedroom_num.png"
              height={40}
              width={40}
              alt=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl">BHK choice in mind?</p>
            <Typography variant="body2" className="text-gray-600">
              Browse by no. of bedrooms in the house
            </Typography>
          </div>
        </div>
        <Grid container spacing={3}>
          {bhkOptions.map((bhk, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{borderRadius:'30px'}} className="hover:shadow-lg w-[250px] h-[200px] transition-shadow">
                <CardContent className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className=" p-4 rounded-full">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/17996/17996187.png"
                        height={50}
                        width={50}
                        alt=""
                      />
                    </div>
                  </div>
                  <Typography variant="h6" className="font-medium">
                    {bhk.type}
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    {bhk.properties} Properties
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="mb-8 bg-[#fff5e4] flex py-10 gap-4 justify-between rounded-2xl p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className=" p-4 rounded-full">
            <img
              src="https://static.99acres.com/universalapp/img/proj_investment_v2.webp"
              height={60}
              width={60}
              alt="img"
            />
          </div>
          <div>
            <Typography variant="h6" className="font-semibold">
              Properties posted by
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Choose type of advertiser
            </Typography>
          </div>
        </div>
        <Card sx={{borderRadius:'30px'}} className="hover:shadow-lg flex transition-shadow w-[50%] h-full p-4">
          <img src="https://cdn3.iconfinder.com/data/icons/classic-multiple-user-4/32/multiple_user_home_classic_tritone_f-512.png" height={50} width={100} alt="" />
          <CardContent className="flex justify-between flex-col p-6">
            <h1 className="text-xl font-bold"> Choose type of advertiser</h1>
            <p className="text-gray-500">Browse your choice of listing</p>
            <div className="flex items-center justify-between w-full">
              <div className="">
                <Typography variant="h6" className="font-medium">
                  Owner
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  10+ Properties
                </Typography>
              </div>
              <span className="material-icons text-gray-500 cursor-pointer">
                <ArrowForward />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertySection;
