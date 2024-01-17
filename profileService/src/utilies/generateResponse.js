"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformMemberData = void 0;
const transformMemberData = (users) => {
    return users.map((item) => ({
        id: item.id,
        userName: item.userName,
        email: item.email,
        role: item.role,
    }));
};
exports.transformMemberData = transformMemberData;
//# sourceMappingURL=generateResponse.js.map