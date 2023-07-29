/* eslint-disable react/no-unescaped-entities */

import type { AppProps } from 'next/app';
import Nav from '../components/Nav';
import * as React from 'react';
import { NextUIProvider, Container} from '@nextui-org/react';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Nav />
  <Container  sx={{ display: 'flex'}}>
    <NextUIProvider>
    <Container>
          <Container>
              <Component {...pageProps} />
      </Container>
    </Container>
      </NextUIProvider>
    </Container>
    <Footer/>
  </>;
}