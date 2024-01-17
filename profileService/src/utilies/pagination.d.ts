interface Pagination {
    page: number;
    limit: number;
    total_items: number;
    total_page: number;
    next_page?: number;
    prev_page?: number;
}
declare const getPagination: (total_items: number, page?: number, limit?: number) => Pagination;
export default getPagination;
