const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  photo: { type: String },
  itemFirstName: { type: String, require: true },
  itemLastName: { type: String },
  phone: { type: String },
  gender: { type: String },
  age: { type: String },
  doctor: { type: String },
  owner: [{ type: Types.ObjectId, ref: "User" }],
  itemId: { type: String },
});
module.exports = model("Item", schema);
