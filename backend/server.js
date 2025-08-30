import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import cloudinaryConfig from './config/Cloudinary.js';
import adminRouter from './routes/adminRoute.js';

//app configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB();
cloudinaryConfig();

//middlewares
app.use(express.json());
app.use(cors());


// api end point Routes
app.use('/api/admin', adminRouter);
// localhost:4000/api/admin/add-doctor


app.get('/', (req, res) => {
    res.send('API WORKING') 
})


app.listen(port, ()=> console.log('Server Started',port))