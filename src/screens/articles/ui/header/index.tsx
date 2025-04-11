'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Chip, Stack } from '@mui/material';
import qs from 'qs';

const ArticlesHeader = () => {
  const params = useSearchParams();
  const userIds = params?.getAll('userId');

  const router = useRouter();

  const handleFilter = (userId: string) => {
    if (!userIds) {
      return router.push('/');
    }
    const newParams = userIds.filter((id) => id !== userId);
    if (newParams.length) {
      return router.push(
        '/?' + qs.stringify({ userId: newParams }, { arrayFormat: 'repeat' })
      );
    }
    router.push('/');
  };

  if (!userIds || !userIds.length) {
    return null;
  }

  return (
    <Stack direction="row" spacing={1} marginBottom={2}>
      {userIds.map((userId) => (
        <Chip
          key={userId}
          label={`user ${userId}`}
          onDelete={() => handleFilter(userId)}
          onClick={() => handleFilter(userId)}
        />
      ))}
    </Stack>
  );
};

export default ArticlesHeader;
