import { Article, FetchArticlesParams } from '@/entities/article/model/types';
import ky from 'ky';
import { API_URL } from '@/shared/constants/env';
import urlJoin from 'url-join';
import qs from 'qs';

const postsUrl = urlJoin(API_URL, 'posts');

export const fetchArticles = (params?: FetchArticlesParams) => {
  const url = urlJoin(
    postsUrl,
    params?.userId
      ? '?' + qs.stringify({ userId: params.userId }, { arrayFormat: 'repeat' })
      : ''
  );
  return ky.get<Article[]>(url, { cache: 'no-store' }).json();
};

export const fetchArticleById = (articleId: string) => {
  const url = urlJoin(postsUrl, articleId);
  return ky.get<Article>(url, { cache: 'no-store' }).json();
};
