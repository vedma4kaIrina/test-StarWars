import React from 'react'
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { theme } from '@/app/layout';
import { ConfigProvider } from 'antd';

export const ThemeDefaultRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  ) => {
  const Wrapper =({children}) => {
    return <ConfigProvider theme={theme}>{children}</ConfigProvider>
  }

  return render(ui, {wrapper: Wrapper, ...options} )
}