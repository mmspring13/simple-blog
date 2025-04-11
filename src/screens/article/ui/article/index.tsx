'use client';

import { Box, Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import ArticleAuthor from '@/screens/article/ui/article-author';
import { Author } from '@/entities/author/model';

export type ArticlePageProps = {
  title: string;
  body: string;
  fetchAuthor: Promise<Author>;
};

const ArticlePage = ({ title, body, fetchAuthor }: ArticlePageProps) => {
  const router = useRouter();

  return (
    <Box bgcolor={grey['900']}>
      <Typography variant="h3" component="h2" p={2}>
        {title}
      </Typography>
      <Box marginTop={2} marginBottom={1} px={2}>
        <Typography>{body}</Typography>
      </Box>
      <Box
        marginTop={2}
        bgcolor={grey['800']}
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button variant="contained" onClick={() => router.back()}>
          Back
        </Button>
        <Suspense
          fallback={<Typography>Fetching author, please wait ...</Typography>}
        >
          <ArticleAuthor fetchAuthor={fetchAuthor} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default ArticlePage;
