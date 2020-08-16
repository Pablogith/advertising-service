import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

import Database from './config/dbConnection'
import { router } from './api/routes/advertisements.route'

dotenv.config();


Database.connect()

const app: Application = express();
app.use(express.json());


app.use('/advertisements', router);

const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello My Friend')
});


app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`))
