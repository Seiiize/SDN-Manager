const express = require("express");
const router = express.Router();
const Equipement = require("../models/Equipement");
router.get("/", async (req, res) => {
  try {
    const equipment = await Equipement.find();
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/", async (req, res) => {
  const equipment = new Equipement({
    type: req.body.type,
    numberOfPorts: req.body.numberOfPorts,
    ipAddresses: req.body.ipAddresses,
  });

  try {
    const newEquipment = await equipment.save();
    res.status(201).json(newEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get("/:id", getEquipment, (req, res) => {
  res.json(res.equipment);
});
router.delete("/:id", getEquipment, async (req, res) => {
  try {
    await res.equipment.remove();
    res.json({ message: "Deleted equipment" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
async function getEquipment(req, res, next) {
  let equipment;
  try {
    equipment = await Equipement.findById(req.params.id);
    if (equipment == null) {
      return res.status(404).json({ message: "Cannot find equipment" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.equipment = equipment;
  next();
}
router.put("/equipement/:id", async (req, res) => {
  try {
    const updatedEquipement = await Equipement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEquipement);
  } catch (error) {
    res.status(500).json("SERVER ERR");
  }
});
router.put("/equipement/:id/ip/:ipId", async (req, res) => {
  try {
    const equipement = await Equipement.findById(req.params.id);
    if (!equipement) {
      return res.status(404).json("Equipement not found");
    }

    const ip = equipement.ipAddresses.id(req.params.ipId);
    if (!ip) {
      return res.status(404).json("IP address not found");
    }

    ip.set(req.body);
    const savedEquipement = await equipement.save();
    res.status(200).json(savedEquipement);
  } catch (error) {
    res.status(500).json("SERVER ERR");
  }
});

module.exports = router;
