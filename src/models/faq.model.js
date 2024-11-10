import mongoose, { Schema } from "mongoose";

const faqSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        answer: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            enum: ["General", "Payments", "Technical", "Test", "Other"],
            default: "General",
        },
        createdByEmail: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const FAQ = mongoose.models.FAQ || mongoose.model("FAQ", faqSchema);

export default FAQ;
