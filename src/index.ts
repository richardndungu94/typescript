import express, { Request, Response,} from 'express';
import dotenv from "dotenv";
import userRoute from './routes/users.route.js';
import mongoose from 'mongoose';

dotenv.config();


mongoose.connect(process.env.LIVE_DB!)
.then(() => { console.log('Connected to MongoDB'); })
.catch((error)=>{console.log('Failed to connect to MongoDB')
console.log(error);
});


const app = express();
app.get('/', (req: Request, res: Response) => {
    return res.json({message:'This is your application!'});
});

app.use(express.json());
app.use(userRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});





























/*
const studentInfo = {name:string;email:string;married:boolean;age:number;} = {
    name: "John Doe",
    email: "john.doe@example.com",
    married: false,
}



//Using Type
type StudentInfo = {
    name: string;
    email: string;
    married: boolean;
    bio?: string;
    numString:string | number
}

interface IStudent{

name: string;
    email: string;
    married: boolean;
    bio?: string;
    numString:string | number
}



 const student1: StudentInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    married: false,
    bio: "A computer science student.",
    numString:1234
}

const student2: StudentInfo = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    married: true,
   numString:90 
}


//GENERICS DATA

interface Iuser<T,U> {
    name: string;
    age: number;
    generic: T;
    generic2?: U;
}

const student :Iuser<string,boolean> = {
    name: "Alice",
    age: 22,
    generic: "This is a string generic",
    generic2: true
}

const student2 :Iuser<number[]> = {
    name: "Bob",
    age: 25,
    generic: [1, 2, 3, 4, 5]
}

function makeGeneric
*/
