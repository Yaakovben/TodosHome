"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.todoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.todoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "The Title of the mission is required"],
    },
    body: {
        type: String,
        required: [true, "The Body of the mission is required"],
    }
});
exports.userSchema = new mongoose_1.default.Schema({
    user_name: {
        type: String,
        required: [true, "user name is required"],
        minlength: [5, "way too short name, please enter at least 5 chars"]
    },
    password: {
        type: String,
        required: [true, "password must be provided"]
    },
    todosArray: {
        Array: [exports.todoSchema]
    }
});
const userModel = mongoose_1.default.model("user", exports.userSchema);
exports.default = userModel;
