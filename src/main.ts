import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Express + Typescript + MySQL" }).status(200);
});

app.listen(port, () => console.log(`App running on port ${port}`));
