import axios from "axios";

export default {

  ///-----------------------START SHIFT ROUTES---------------------
  // Gets all shifts
  getShifts: function(userId) {
    return axios.get("/api/shifts", {params: { userId }});
  }, 
  getAvdLists: function(userId) {
    return axios.get("/api/shifts/byAvdLists", {params: { userId }});
  },
  //GET by users Auth ID
  getShiftByAuthId: function(authID) {
    return axios.get("/api/shifts/byAuth" , {params: { authID }});
  },
  // Update the shift with the given id
  updateShift: function(id, traded) {
    // console.log("Traded" +traded);
     let config = {
      headers: {
        header1: "Test-Header",
      }
     }
    return axios.put("/api/shifts/" + id, {traded}, config).then(res =>{
      console.log(res);
    });
  },
  swapMyDetails: function(id, theirDetails) {
    
     let config = {
      headers: {
        header1: "Test-Header",
      }
     }
 
    return axios.put("/api/shifts/" + id+ "/multiUpdate", {theirDetails}, config).then(res =>{
      console.log(res);
    });
  },

  // Deletes the shift with the given id
  deleteShift: function(id) {
    return axios.delete("/api/shifts/" + id);
  },
  // Saves a shift to the database
  saveShift: function(shiftData) {
    console.log("Save shift hit");
    return axios.post("/api/shifts", shiftData);
  },
  saveID: function(id, userId){
    return axios.put("/api/shifts/" +id+ '/ignore', {userId});
  },
  removefromAvd: function(id,userId){
    return axios.put("/api/shifts/" +id+ '/remove', {userId});
  },
  saveAvdDetails: function(id, avdDetails){
    return axios.put("/api/shifts/" +id+ '/approve', {avdDetails});
  },
 
///-----------------------END SHIFT ROUTES---------------------
///-----------------------START PERSONNEL ROUTES---------------------
//GET Routes
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users"+id);
  },
  getUserByName: function(name) {
    console.log("UserByName hit "+name);
    return axios.get("/api/users/byName", {params: { name }});
  },
  getUsersByShift: function(shift) {
    console.log("UserByShift hit "+shift);
    return axios.get("/api/users/byShift", {params: { shift }});
  },

  //POST Routes
  createUser: function(personnelData) {
    return axios.get("/api/users", personnelData);
  },
};