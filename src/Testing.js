import React, { useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@material-ui/core";
import States from "./State";

const Testing = () => {
  const [newState, setNewState] = React.useState([]);
  const [profile, setProfile] = useState({
    state: [],
    currentlocation: [],
    sublocation: [],
  });
  const [location,setLocation]=useState([])

  return (
    <div style={{ marginTop: "200px" }}>
      <div className="col-lg-6 col-md-6">
        <label>State</label>
        <Autocomplete
          id="combo-box-demo"
          single
          value={profile?.state}
          options={States.map((res) => {
            return res.name;
          })}
          getOptionLabel={(option) => option}
          onChange={(e, value) => {
            
            const filteredDate = States.filter(
              (state, i) => state.name === value

              
            );
  
            setNewState(filteredDate[0].childs);

            setProfile({
              ...profile,
              state: value,
              currentlocation: "",
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              name="single"
              label="select your state"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>

      <div className="col-lg-6 col-md-6">
        <label> Current Location </label>
        <Autocomplete
          id="combo-box-demo"
          single
          value={profile?.currentlocation}
          options={newState.map((res) => {
            return res.name;
          })}
          getOptionLabel={(option) => option}

          onChange={(e, value) => {

            const filteredDate1 = newState.filter(
              (state, i) => state.name === value
            );
            setLocation(filteredDate1[0].subchilds)
            setProfile({
              ...profile,
              currentlocation:value,
              sublocation: '',
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              name="single"
              label="Enter your sub location"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>

      <Autocomplete
        multiple
        id="tags-outlined"
        options={location.map((res) => {
          return res.name;
        })}
        getOptionLabel={(option) => option}
       
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />

       {/* <div className="col-lg-6 col-md-6">
        <label> Sub Location </label>
        <Autocomplete
        
          id="combo-box-demo"
          single
          value={profile?.sublocation}
          options={location.map((res) => {
            return res.name;
          })}
          getOptionLabel={(option) => option}
          onChange={(e, value) => {
            setProfile({
              ...profile,
              sublocation:value,
            });
            
          }}
         
          renderInput={(params) => (
            <TextField
              {...params}
              name="single"
              label="Enter your current location"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div> */}
    </div>
  );
};

export default Testing;
