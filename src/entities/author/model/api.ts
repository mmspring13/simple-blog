import urlJoin from 'url-join';
import { API_URL } from '@/shared/constants/env';
import ky from 'ky';
import { Author } from '@/entities/author/model/types';

const authorUrl = urlJoin(API_URL, 'users');

export const fetchAuthorById = async (authorId: string) => {
  const url = urlJoin(authorUrl, authorId);
  return ky.get<Author>(url, { cache: 'no-store' }).json();
};
