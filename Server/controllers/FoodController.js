import fs from 'fs';
import FoodModel from "../models/FoodModel.js";

export const addFood = async (req, res) => {
    let image_filename ;
    if (req.file) {
        image_filename = `${req.file.filename}`;
    } else {
        // Handle the case when no file is uploaded
        // For example, you can set a default image filename or return an error response
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "food added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error: food not added" });
    }
}

export const listFood = async (req, res) => {
    try {
        const foods = await FoodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching food items" });
    }
}

export  const removeFood = async (req, res) => {
    try {
        const food = await FoodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }
        fs.unlink(`uploads/${food.image}`, () => {});
        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error removing food item" });
    }
}

