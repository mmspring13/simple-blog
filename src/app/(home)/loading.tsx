import { Grid, Skeleton } from '@mui/material';

const HomeLoading = () => {
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
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
      <Skeleton variant="rectangular" height={240} />
    </Grid>
  );
};

export default HomeLoading;
