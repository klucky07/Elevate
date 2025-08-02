const mongoose = require('mongoose')   ;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['investor', 'startup', 'admin']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const startupSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true
  },
  founders: [String],
  foundingYear: Number,
  funding: String,
  investors: [String],
  industry: String
}, {
  timestamps: true
}
);

const User = mongoose.model('User', UserSchema);
const Startups=mongoose.model('Startups',startupSchema);

module.exports ={ User,Startups};