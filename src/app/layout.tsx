import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ConfigProvider, Layout, ThemeConfig } from 'antd';
import enUS from 'antd/locale/en_US'
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import FooterApp from '@/lib/components/Footer';
import HeaderApp from '@/lib/components/Header';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Test Star Wars',
  description: 'Test Star Wars'
};

export const theme: ThemeConfig = {
  hashed: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AntdRegistry>
        <ConfigProvider theme={theme} locale={enUS}>
          <Layout
            style={{
              borderRadius: 8,
              overflow: 'hidden',
              width: 'calc(100% - 8px)',
              maxWidth: 'calc(100% - 8px)'
            }}>
            <Header>
              <HeaderApp />
            </Header>
            <Content style={{minHeight: 'calc(100vh - 131px'}}>
              {children}
            </Content>
            <Footer>
              <FooterApp />
            </Footer>
          </Layout>
        </ConfigProvider>
      </AntdRegistry>
      </body>
    </html>
  );
}
