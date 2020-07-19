import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  lastModified: {
    type: String
  }
});

const GradeModel = mongoose.model('grades',gradeSchema,'grades');

export {GradeModel}