"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const usersRouter_1 = __importDefault(require("./routers/usersRouter"));
const todosRouter_1 = __importDefault(require("./routers/todosRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', usersRouter_1.default);
app.use('/todo', todosRouter_1.default);
const PORT = (process.env.PORT || 1010);
app.listen(PORT, () => {
    console.log(`Server is up and running, feel free to visit at http://localhost:${PORT}`);
});
