"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.register = void 0;
const userService_1 = require("../services/userService");
const register = async (req, res) => {
    try {
        const idUser = await (0, userService_1.createUser)(req.body);
        res.status(201).json({
            user_id: idUser,
            msg: `User ${req.body.user_name} created `
        });
    }
    catch (err) {
        res.status(401).json(err.message);
    }
};
exports.register = register;
const getUsers = async (req, res) => {
    try {
        const users = await (0, userService_1.getAllUsers)();
        res.status(201).json({
            msg: "This is all users",
            users: users
        });
    }
    catch (err) {
        res.status(401).json(err.message);
    }
};
exports.getUsers = getUsers;
