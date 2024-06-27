import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageAdRouter from "./router/messageAdRouter.js";
import messageRoutes from "./router/messageRoutes.js";
import chatRoutes from "./router/chatRoutes.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import vitalsRouter from "./router/vitalsRouter.js";
const app = express();
config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
// app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/messagetoAd", messageAdRouter);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/chat", chatRoutes);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/user/patient/vitals", vitalsRouter);


dbConnection();

app.use(errorMiddleware);
export default app;
