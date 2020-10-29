import axios from "axios";

export default {
  // Gets all shifts
  getShifts: function() {
    return axios.get("/api/shifts");
  },
  // Gets the shift with the given id
  // getShift: function(id) {
  //   return axios.get("/api/shifts/" + id);
  // },
   // Update the shift with the given id
  updateShift: function(id, data) {
    return axios.put("/api/shifts/" + id, data).then(res =>{
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
  }
};