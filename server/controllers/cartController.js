import { response } from "express";
import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    // Create item object if not exists
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    // Increase quantity
    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 1;
    } else {
      cartData[itemId][size] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added To Cart" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // If no userId sent
    if (!userId) {
      return res.json({
        success: false,
        message: "User ID is missing. User not logged in."
      });
    }

    const userData = await userModel.findById(userId);

    // If user doesn't exist in DB
    if (!userData) {
      return res.json({
        success: false,
        message: "User not found."
      });
    }

     let cartData = await userData.cartData

    return res.json({ success: true, cartData });

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// export
export { addToCart, updateCart, getUserCart };