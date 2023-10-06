import mongoose, {Schema} from 'mongoose'

const carSchema = new Schema(
    {
        Make: String,
        Model: String,
        Year: String,
        Price: String,
        Avg: String,
        Type: String,
    },{
        timestamps: true,
    }
)

const Car  = mongoose.models.Car ||mongoose.model("Car", carSchema)

export default Car;