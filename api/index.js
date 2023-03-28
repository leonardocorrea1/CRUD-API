import Express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800);
