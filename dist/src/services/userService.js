"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../../types/models/userModel"));
const createUser = async (user) => {
    try {
        const { user_name, password } = user;
        if (!user_name || !password) {
            throw Error("Password and name required");
        }
        const dbUser = new userModel_1.default({
            user_name,
            password
        });
        const saving = await dbUser.save();
        return saving.id;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.createUser = createUser;
const getAllUsers = async () => {
    try {
        const users = await userModel_1.default.find();
        if (!users || users.length == 0) {
            throw Error("There are no users in the system");
        }
        return users;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.getAllUsers = getAllUsers;
