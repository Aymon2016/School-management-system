import {CONFIG} from '../config/config.constant'

interface Pagination {
  page: number;
  limit: number;
  total_items: number;
  total_page: number;
  next_page?: number;
  prev_page?: number;
}

const getPagination = (
  total_items: number,
  page: number = CONFIG.page,
  limit: number = CONFIG.limit
): Pagination => {
  const total_page = Math.ceil(total_items / limit);

  const pagination: Pagination = {
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

export default getPagination;
