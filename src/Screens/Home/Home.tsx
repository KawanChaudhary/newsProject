import React, { useEffect } from 'react';
import CommonFlatlist from '../../Components/Common/CommonFlatlist';
import useCommon from '../../Hooks/useCommon';
import { GET_TOP_HEADLINES } from '../../Endpoints/endpoints';

const Home: React.FC = () => {


  const {news, fetchNews, loading} = useCommon();

  useEffect(() => {
    fetchNews(GET_TOP_HEADLINES);
  }, []);

  return (
    <CommonFlatlist articles={news?.articles} loading={loading} />
  );
};

export default Home;
