"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.register = void 0;
const register = async (req, res) => {
    try {
        res.status(201).json({
            msg: "todo created sucsesfuly"
        });
    }
    catch (err) {
        res.status(401).json(`Error creating todo: ,${err}`);
    }
};
exports.register = register;
const get = async (req, res) => {
    try {
        res.status(201).json({
            msg: "this is todos"
        });
    }
    catch (err) {
        res.status(401).json(`Error get todo: ,${err}`);
    }
};
exports.get = get;
