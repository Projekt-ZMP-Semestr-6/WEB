import { AttachedGames, FreeGames, SearchGame } from '@components/standard';

const IndexPage = () => {
  return (
    <>
      <FreeGames />
      <SearchGame />
      <AttachedGames />
    </>
  );
};

export default IndexPage;
