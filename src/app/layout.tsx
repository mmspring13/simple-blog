import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { roboto } from '@/styles/fonts';
import { Container, ThemeProvider, Typography } from '@mui/material';
import theme from '@/styles/theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'blog',
};

export const viewport: Viewport = {
  themeColor: 'black',
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
              <Typography component="h1" variant="h1" marginBottom={2}>
                Blog
              </Typography>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
