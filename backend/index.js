import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 4000;

const uri ="mongodb+srv://dharshan3:dharshan3@cluster0.ruslxri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to yourDB-name database");
  })
  .catch((err) => {
    console.log("Error connecting to database:", err);
  });

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('users', UserSchema);

//Middleware to use json
app.use(express.json());
app.use(cors());

//API endpoint for user registration

app.post('/register', async (req, res) => {
  try {
    const { name, password } = req.body;
    //check if user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "USer already exists" });
    }

    //Create new user
    const newUser = new User({ name, password });
    await newUser.save();

    res.status(201).json({ message: "User succesfully registered" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.get('/users', async (req ,res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error("error getting users:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
