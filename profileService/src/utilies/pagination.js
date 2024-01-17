"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_constant_1 = require("../config/config.constant");
const getPagination = (total_items, page = config_constant_1.CONFIG.page, limit = config_constant_1.CONFIG.limit) => {
    const total_page = Math.ceil(total_items / limit);
    const pagination = {
        page,
        limit,
        total_items,
        total_page,
    };
    if (page < total_page) {
        pagination.next_page = page + 1;
    }
    if (page > 1) {
        pagination.prev_page = page - 1;
    }
    return pagination;
};
exports.default = getPagination;
//# sourceMappingURL=pagination.js.map