import mongoose from 'mongoose';

const dbName = 'todo-list';

export const connect = () => {
    try {
        mongoose.connect(`mongodb://localhost/${dbName}`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};