// dataController.js
import { ObjectId } from "mongodb";
import User from "../models/user.model.js";
import SSLCommerzPayment from "sslcommerz-lts";
import Ride from "../models/ride.model.js";
const store_id = "cais661c139428107";
const store_passwd = "cais661c139428107@ssl";
const is_live = false;

export const fetchData = async (req, res) => {
  console.log(req.body);
  const { rider, selectedSeats } = req.body; 
  
  const transactionId = new ObjectId().toString();
  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123", // use unique tran_id for each api call
    success_url: `http://localhost:5000/api/data/success?transactionId=${transactionId}`,
    fail_url: "http://localhost:3030/fail",
    cancel_url: "http://localhost:3030/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  try {
    const user = await User.findById({ _id:rider });
    if (!user) {
      throw new Error('User not found');
    }
    console.log(user);
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data); // Initialize payment

    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;

    // Create ride data
    const rideData = {
      transactionId,
      ...req.body,
      paid: false,
      user: req.user._id, // We will assign user ID after finding the user
    };

    // Find the user
    

    // Update seat availability
    user.seats.forEach(seat => {
      if (selectedSeats.includes(seat.sit)) {
        seat.available = false; // Assuming selectedSeats means the seats are no longer available
      }
    });

    // Save the updated user document
    await user.save();
    console.log(user);

    // Create ride record
    const ride = await Ride.create(rideData);

    if (ride) {
      res.send({ url: GatewayPageURL });
    }
  } catch (error) {
    console.error('Error in fetchData:', error.message);
    res.status(500).send({ error: 'Internal server error' });
  }
};

export const success = async (req, res) => {
  const { transactionId } = req.query;
  const updatedRide = await Ride.findOneAndUpdate(
    { transactionId: transactionId },
    { paid: true }
  );
  if (updatedRide) {
    res.redirect(
      `http://localhost:5000/start-ride?transactionId=${transactionId}`
    );
  }
};
