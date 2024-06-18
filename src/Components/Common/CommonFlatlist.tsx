import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Article } from '../../Types/types'
import NewsCard from '../General/NewsCard';
import { useTheme } from '../../Contexts/ThemeContext';
import { moderateScale } from '../../Utils/ResponsiveUtil';

type Props = {
    articles: Article[];
    loading: boolean;
}

const CommonFlatlist: React.FC<Props> = ({ articles, loading }) => {

    const { theme } = useTheme();

    const renderList = ({ item }: any) => (
        <NewsCard item={item} theme={theme} loading={loading} />
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.card }]}>
            <FlatList
                data={articles}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderList}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default CommonFlatlist


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: moderateScale(8),
    },
    flatListContainer: {
        gap: moderateScale(8),
    },
});