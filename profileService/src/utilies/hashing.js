"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashMatched = exports.generateHash = void 0;
const bcrypt = require("bcryptjs");
const generateHash = async (payload, saltRound = 10) => {
    const salt = await bcrypt.genSalt(saltRound);
    return bcrypt.hash(payload, salt);
};
exports.generateHash = generateHash;
const hashMatched = async (raw, hash) => {
    const result = await bcrypt.compare(raw, hash);
    return result;
};
exports.hashMatched = hashMatched;
//# sourceMappingURL=hashing.js.map