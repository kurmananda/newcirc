import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        name: String,
        mobile: {
            type: Number,
            min: 1000000000,
            max: 9999999999,
        },
        role: {
            type: String,
            required: true,
            default: "user",
            enum: [
                "user",
                "admin",
                "testAdmin",
                "evaluationAdmin",
            ],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        college: String,
        branch: String,
        registeredTests: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "TestParticipants",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
