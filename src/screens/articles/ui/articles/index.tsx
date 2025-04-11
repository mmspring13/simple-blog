import {
  ArticlePreview,
  ArticlePreviewProps,
} from '@/entities/article/ui/article-preview';
import { Box, Grid } from '@mui/material';

export type ArticlesPageProps = {
  articles: ArticlePreviewProps[];
};

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <Grid
      container
      gap={2}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
    >
      {articles.map((article) => (
        <Box key={article.id} sx={{ display: 'flex' }}>
          <ArticlePreview
            id={article.id}
            title={article.title}
            body={article.body}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default ArticlesPage;
