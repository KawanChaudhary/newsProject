import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import useCommon from '../../Hooks/useCommon';
import { GET_WORLD_NEWS } from '../../Endpoints/endpoints';
import CommonFlatlist from '../../Components/Common/CommonFlatlist';

type Props = {}

const World = (props: Props) => {

  const { news, fetchNews, loading } = useCommon();

  useEffect(() => {
    fetchNews(GET_WORLD_NEWS);
  }, []);
  return (
    <CommonFlatlist articles={news?.articles} loading={loading} />
  )
}

export default World

const styles = StyleSheet.create({})