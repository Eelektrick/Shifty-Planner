import axios from "axios";

export default {

  ///-----------------------START SHIFT ROUTES---------------------
  // Gets all shifts
  getShifts: function(userId) {
    return axios.get("/api/shifts", {params: { userId }});
  },
  getShiftByTrade: function() {
    return axios.get("/api/shifts/");
  },
  // getShiftByAuthId: function(authID) {
  //   console.log(JSON.stringify(authID)+" FROM getShiftByAuthId AXIOS Call");
  //   return axios.get("/api/shifts/byAuth" , {params: { authID }});
  // },
  getShiftByAuthId: function(authID) {
    console.log(JSON.stringify(authID)+" FROM getShiftByAuthId AXIOS Call");
    return axios.get("/api/shifts/byAuth" , {params: { authID }});
  },
  // Gets the shift with the given id
  getShift: function(id) {
    return axios.get("/api/shifts/" + id);
  },
   // Update the shift with the given id
  updateShift: function(id, data) {
     let config = {
      headers: {
        header1: "Test-Header",
      }
     }
 
    return axios.put("/api/shifts/" + id, data, config).then(res =>{
      console.log(res);
    });
  },
  // Deletes the shift with the given id
  deleteShift: function(id) {
    return axios.delete("/api/shifts/" + id);
  },
  // Saves a shift to the database
  saveShift: function(shiftData) {
    return axios.post("/api/shifts", shiftData);
  },
  saveID: function(id, userId){
    return axios.put("/api/shifts/" +id+ '/ignore', {userId});
  },
///-----------------------END SHIFT ROUTES---------------------
///-----------------------START PERSONNEL ROUTES---------------------
//Get Routes
getUsers: function(userId) {
  return axios.get("/api/Users", {params: { userId }});
},
};