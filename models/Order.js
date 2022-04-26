const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: "No payment info" },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    subtotal: { type: Number, required: true },
    status: { type: String, required: true, default: "Pending" },
  },
  { timestamps: true }
);

// mongoose.models = {};
// export default mongoose.model("Order", OrderSchema);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
