import express from 'express';
import spaceRoutes from './routes/spaceRoutes.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import logMiddleware from './middleware/log.Middlewares.js';

const app = express();

app.use(cors());

app.use("/spaces", spaceRoutes);
app.use("/auth", authRoutes);
app.use(logMiddleware);

app.use(express.json());

    


app.listen(3001, () => {
    console.log('Server started on port 3001');
});