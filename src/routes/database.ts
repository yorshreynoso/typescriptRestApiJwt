import mongoose, {ConnectOptions } from 'mongoose';

const username: string = 'yorshreynoso';
const password: string = 'myPassword';
const url: string      = `mongodb+srv://${username}:${password}@cluster0.bycie7r.mongodb.net/?retryWrites=true&w=majority`;


(async() => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true
        } as ConnectOptions);
        console.log('mongoose db is working');
        
    } catch (error) {
        console.error(error);
    }
})();

export default mongoose
