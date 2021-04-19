const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  items: [{ type: Types.ObjectId, ref: "Item" }],
});
module.exports = model("User", schema);
