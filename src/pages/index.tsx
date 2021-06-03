import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <></>
  )
};

Home.getInitialProps = async (_ctx) => {
  return { id: 0 };
};

export default Home;