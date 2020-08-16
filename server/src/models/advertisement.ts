import mongoose, { Schema } from 'mongoose';

const AdvertisementSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
  }
);


const AdvertisementModel = mongoose.model<mongoose.Document>('Advertisement', AdvertisementSchema);

export { AdvertisementModel };