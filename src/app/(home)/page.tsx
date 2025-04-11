import Articles from '@/screens/articles/ui/articles';
import { fetchArticles, FetchArticlesParams } from '@/entities/article/model';
import { ArticlePreviewProps } from '@/entities/article/ui/article-preview';
import { Box } from '@mui/material';
import ArticlesHeader from '@/screens/articles/ui/header';

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ [k: string]: string | string[] | undefined }>;
}) {
  const userId = (await searchParams)?.userId;
  const params: FetchArticlesParams = {};
  if (userId) {
    params.userId = userId;
  }
  const articles = await fetchArticles(params);
  const articlePreviews: ArticlePreviewProps[] = articles.map((article) => ({
    id: article.id,
    title: article.title,
    body: article.body,
  }));

  return (
    <Box>
      <ArticlesHeader />
      <Articles articles={articlePreviews} />
    </Box>
  );
}
