import express from "express";
import notificationRoutes from "./routes/notificationRoutes.js";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import dotenv from "dotenv";
import appConfig from "./appConfig.js";
dotenv.config();

const app = express();
app.use(express.json());

// Load OpenAPI Specification
const swaggerDocument = yaml.load("./api/oas-notification.yaml");

// Serve Swagger docs at /docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", notificationRoutes);

app.get("/", (req, res) => {
    res.send("Notificator service running<br> <a href='/docs'>View API Docs</a>");
});


const PORT = appConfig.port;
app.listen(PORT, () => {
    console.log(`Notificator service running at http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
