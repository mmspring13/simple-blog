import { fetchArticleById } from '@/entities/article/model';
import ArticlePage from '@/screens/article/ui/article';
import { fetchAuthorById } from '@/entities/author/model';

const ArticleAppPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const article = await fetchArticleById(id);
  const fetchAuthor = fetchAuthorById(String(article.userId));

  return (
    <ArticlePage
      title={article.title}
      body={article.body}
      fetchAuthor={fetchAuthor}
    />
  );
};

export default ArticleAppPage;
