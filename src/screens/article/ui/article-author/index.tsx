'use client';

import { Author } from '@/entities/author/model';
import { Box, Link, Typography } from '@mui/material';
import { use } from 'react';

const ArticleAuthor = ({ fetchAuthor }: { fetchAuthor: Promise<Author> }) => {
  const author = use(fetchAuthor);

  return (
    <Box>
      <Typography>
        Author:{' '}
        <Link href={`/?userId=${String(author.id)}`}>
          {author.name} ({author.username})
        </Link>
      </Typography>
    </Box>
  );
};

export default ArticleAuthor;
