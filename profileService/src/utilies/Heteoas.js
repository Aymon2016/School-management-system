"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeteOASForAllItems = void 0;
const generateQueryString = (query) => {
    return Object.keys(query)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(query[key]))
        .join('&');
};
const getHeteOASForAllItems = ({ url = '/', path = '', query = {}, hasNext, hasPrev, page = 1, }) => {
    const links = {
        self: url,
    };
    if (hasNext) {
        const querystr = generateQueryString({ ...query, page: page + 1 });
        links.next = `${path}?${querystr}`;
    }
    if (hasPrev) {
        const querystr = generateQueryString({ ...query, page: page - 1 });
        links.prev = `${path}?${querystr}`;
    }
    return links;
};
exports.getHeteOASForAllItems = getHeteOASForAllItems;
//# sourceMappingURL=Heteoas.js.map