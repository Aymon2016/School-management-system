interface Query {
    [key: string]: string | number;
}
interface Links {
    self: string;
    next?: string;
    prev?: string;
}
declare const getHeteOASForAllItems: ({ url, path, query, hasNext, hasPrev, page, }: {
    url?: string;
    path?: string;
    query?: Query;
    hasNext: boolean;
    hasPrev: boolean;
    page?: number;
}) => Links;
export { getHeteOASForAllItems };
