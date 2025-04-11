'use client';

import { ArticlePreviewProps } from './types';
import { Box, Link, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export const ArticlePreview = ({ id, body, title }: ArticlePreviewProps) => {
  return (
    <Box
      sx={{
        bgcolor: blueGrey['900'],
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
      p={2}
    >
      <Typography
        variant="h4"
        component="h3"
        marginBottom={1}
        color={blueGrey['A100']}
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          WebkitLineClamp: 2,
          breakInside: 'avoid',
          WebkitBoxOrient: 'vertical',
          display: '-webkit-box',
        }}
      >
        {title}
      </Typography>
      <Box marginBottom={1}>
        <Typography
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            WebkitLineClamp: 4,
            breakInside: 'avoid',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
          }}
        >
          {body}
        </Typography>
      </Box>
      <Box
        marginBottom="0"
        marginTop="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href={`/articles/${id}`}>More</Link>
        <Typography>#{id}</Typography>
      </Box>
    </Box>
  );
};
