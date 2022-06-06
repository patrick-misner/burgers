import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BurgerSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true} }
)