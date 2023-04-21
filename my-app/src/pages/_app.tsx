import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </SessionProvider>
  )
}
