const mongoose = require("mongoose");
const { Schema } = mongoose;
const ipRegex =
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const EquipementSchema = new Schema({
  type: {
    type: String,
    enum: ["router", "switch"],
    required: true,
  },
  manufacturer: String,
  model: String,
  firmwareVersion: String,
  status: {
    type: String,
    enum: ["online", "offline", "maintenance"],
  },
  numberOfPorts: {
    type: Number,
    required: true,
  },
  ipAddresses: [
    {
      ip: {
        type: String,
        match: [ipRegex, "Please fill a valid IP address"],
      },
      subnetMask: {
        type: String,
        match: [ipRegex, "Please fill a valid subnet mask"],
      },
    },
  ],
  vlans: [String],
  acl: [String],
  changeHistory: [String],
});

module.exports = mongoose.model("Equipement", EquipementSchema);
