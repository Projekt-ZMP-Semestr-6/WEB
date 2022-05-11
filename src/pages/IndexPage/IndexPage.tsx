import {
  AttachedGames,
  Bestsellers,
  FreeGames,
  SearchGame,
  TestPriceChange
} from '@components/standard';

const IndexPage = () => {
  return (
    <>
      <TestPriceChange />
      <FreeGames />
      <AttachedGames />
      <SearchGame />
      <Bestsellers />
    </>
  );
};

export default IndexPage;
