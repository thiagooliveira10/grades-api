import mongoose from 'mongoose';
import { GradeModel } from './gradeModel.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grades = GradeModel;


export { db };
