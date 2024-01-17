interface Query {
  [key: string]: string | number;
}

interface Links {
  self: string;
  next?: string;
  prev?: string;
}

const generateQueryString = (query: Query): string => {
  return Object.keys(query)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(query[key]))
    .join('&');
};

const getHeteOASForAllItems = ({
  url = '/',
  path = '',
  query = {},
  hasNext,
  hasPrev,
  page = 1,
}: {
  url?: string;
  path?: string;
  query?: Query;
  hasNext: boolean;
  hasPrev: boolean;
  page?: number;
}): Links => {
  const links: Links = {
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

export { getHeteOASForAllItems };
