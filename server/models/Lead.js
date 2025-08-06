import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, 'is invalid'],
        },
        phone: {
            type: String,
            required: false,
        },
        businessType: {
            type: String,
            required: true,
            enum: ['Freelancer', 'Coach', 'Small Business', 'Ecommerce'],
        },
        message: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
