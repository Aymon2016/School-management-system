"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.decodeToken = exports.generateToken = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const generateToken = async (payload, algorithm = 'HS256', secret = 'accesstoken', expiresIn = '1h') => {
    try {
        return jwt.sign(payload, secret, {
            algorithm,
            expiresIn,
        });
    }
    catch (e) {
        console.error('[JWT]', e);
        throw new common_1.InternalServerErrorException('Token cannot be generated');
    }
};
exports.generateToken = generateToken;
const decodeToken = async (token, algorithm = 'HS256') => {
    try {
        const decoded = jwt.decode(token, { algorithms: [algorithm] });
        if (!decoded) {
            throw new common_1.InternalServerErrorException('Token cannot be decoded');
        }
        return decoded;
    }
    catch (e) {
        throw new common_1.InternalServerErrorException('Internal Server Error');
    }
};
exports.decodeToken = decodeToken;
const verifyToken = async (token, algorithm = 'HS256', secret = 'accesstoken') => {
    try {
        return jwt.verify(token, secret, { algorithms: [algorithm] });
    }
    catch (e) {
        throw new common_1.UnauthorizedException('Token is not valid');
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=tokenGenerate.utilis.js.map