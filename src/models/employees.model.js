import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: 1,
    maxLength: 50,
    required: true
  },
 
  email: {
    type: String,
    match: /.*@.*\..*/,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  }
});

const Employee = mongoose.model('employee', employeeSchema);

export { Employee };