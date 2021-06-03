import styled from 'styled-components';

import { mediaQueries } from '../../styles/mediaQueries';

export const LayoutContainer = styled.main`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: linear-gradient(180deg, rgba(138, 40, 173, 0) 0%, var(--purple) 100%), url('rainbow-background.png');
  background-size: cover;
`;

export const RainbowBandage = styled.div`
  position: absolute;
  width: 200px;
  height: 184.8px;
  left: -40.93px;
  top: -39px;

  background: url('rainbow-bandage.png') no-repeat;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 8rem;
  padding: 3.5rem 14rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries('lg')`
    padding: 3.5rem 18rem;
  `}
`;

export const HeaderTitle = styled.h1`
  color: var(--white);
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3.5rem;
`;