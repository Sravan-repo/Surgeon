import validator from 'validator';
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';

// Api for adding doctors

const addDoctor = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            speciality,
            experience,
            degree,
            about,
            fees,
            address,
        } = req.body;

        const imageFile = req.file;

        // Validate required fields
        if (!name || !email || !password || !speciality || !experience || !degree || !about || !fees || !address || !imageFile || date) {
            return res.status(400).json({ success: false, message: "Missing details" });
        }

        // validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        //validate strong password
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Strong password. " });
        }

        //hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Check if image file is provided
        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
        });
        const imageUrl = imageUpload.secure_url;

        // create doctorData
        const doctorData = {
            name,
            email,
            password: hashedPassword,
            speciality,
            experience,
            degree,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
            image: imageUrl
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        res.status(200).json({ success: true, message: "Doctor added successfully", doctor: newDoctor });

    } catch (error) {
        console.log("Error adding doctor:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { addDoctor };
