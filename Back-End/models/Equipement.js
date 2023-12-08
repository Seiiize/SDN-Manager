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
  manufacturer: String, // Nouveau champ pour le fabricant
  model: String, // Nouveau champ pour le modèle
  firmwareVersion: String, // Nouveau champ pour la version du firmware
  status: {
    type: String,
    enum: ["online", "offline", "maintenance"], // Nouveau champ pour le statut
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
  vlans: [String], // Nouveau champ pour les VLANs
  acl: [String], // Nouveau champ pour les ACLs
  changeHistory: [String], // Nouveau champ pour l'historique des modifications
});

module.exports = mongoose.model("Equipement", EquipementSchema);
