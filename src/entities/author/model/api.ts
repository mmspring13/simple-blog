import urlJoin from 'url-join';
import { API_URL } from '@/shared/constants/env';
import ky from 'ky';
import { Author } from '@/entities/author/model/types';

const authorUrl = urlJoin(API_URL, 'users');

export const fetchAuthorById = async (authorId: string) => {
  const url = urlJoin(authorUrl, authorId);
  // it's good to use revalidate time cache for this request, but unfortunately kyjs doesn't support custom options
  // for native fetch https://github.com/vercel/next.js/issues/48519#issuecomment-1587331280
  // may be i'm can fix it later)
  return ky.get<Author>(url).json();
};
