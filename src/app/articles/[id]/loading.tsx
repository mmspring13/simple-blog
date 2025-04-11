import { Skeleton, Stack } from '@mui/material';

const ArticleLoading = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" height={40} />
      <Skeleton variant="rounded" height={160} />
      <Skeleton variant="rectangular" height={60} />
    </Stack>
  );
};

export default ArticleLoading;
