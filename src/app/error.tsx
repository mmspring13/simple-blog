'use client';

import { useEffect } from 'react';
import { Button } from '@mui/material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button
        sx={{
          marginTop: '1rem',
        }}
        variant="contained"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
}
