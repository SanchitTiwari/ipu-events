import {Document,Schema,models,model} from 'mongoose'

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    isFree: boolean;
    url?: string;
    category: { _id: string, name: string }
    organizer: { _id: string, firstName: string, lastName: string }
  }

const EventSchema = new Schema({
    title:{type:String, required:true},
<<<<<<< HEAD
<<<<<<< HEAD
    decription:{type:String},
=======
    description:{type:String},
>>>>>>> deployment
=======
    description:{type:String},
>>>>>>> ae11d0a6bcd141dff7adf03c82dfaed6d4057789
    location:{type:String},
    createdAt: {type:Date, default:Date.now},
    imageUrl:{type:String, required:true},
    startDateTime: {type: Date, default:Date.now},
    endDateTime: {type: Date, default:Date.now},
<<<<<<< HEAD
<<<<<<< HEAD
    price:{type:String, required:true},
=======
    price:{type:String},
>>>>>>> deployment
=======
    price:{type:String},
>>>>>>> ae11d0a6bcd141dff7adf03c82dfaed6d4057789
    isFree: {type:Boolean, default:false},
    url:{type:String},
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})
const Event = models.Event || model('Event', EventSchema);

export default Event;