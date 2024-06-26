import mongoose, { Schema } from "mongoose";

const AdmissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admission = mongoose.model("Admission", AdmissionSchema);

export default Admission;
