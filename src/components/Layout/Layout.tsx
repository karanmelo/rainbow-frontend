import styled from 'styled-components';

import Head from './Head';
import Header from './Header';
import Content from './Content';

import { LayoutContainer, RainbowBandage } from './styled';

const Page: React.FC = ({ children }) => {

  return (
    <LayoutContainer>
      <Head />
      <RainbowBandage />
      <Header />
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  )
}

export default Page;

