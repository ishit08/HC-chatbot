"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const patient_1 = __importDefault(require("./routes/patient"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/patients', patient_1.default);
// MongoDB Connection
mongoose_1.default.connect(config_1.config.MONGO_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(config_1.config.PORT, () => {
        console.log(`Server is running on port ${config_1.config.PORT}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
