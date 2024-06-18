import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Article } from '../../Types/types'
import { moderateScale, scale, verticalScale } from '../../Utils/ResponsiveUtil'
import { Theme } from '../../Constants/Theme/theme'
import SkeletonLoader from './Skeleton'

import Entypo from 'react-native-vector-icons/Entypo'
import { formatRelativeDate, getDefaultImage } from '../../Utils/GlobalUtil'

type Props = {
    item: Article;
    theme: Theme;
    loading: boolean
}

const NewsCard: React.FC<Props> = ({ item, theme, loading }) => {
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>

            {/* Title View */}

            <View >
                {loading ?
                    <>
                        <SkeletonLoader width='100%' height={15} />
                        <SkeletonLoader width='70%' height={15} />
                    </>
                    :
                    <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
                }
            </View>

            {/* Content and Image */}

            <View style={[styles.contentView]}>

                {loading ?
                    <View style={styles.rowView}>

                        <View style={{ flexDirection: 'column' }}>
                            <SkeletonLoader width='20%' height={10} />
                            <SkeletonLoader width='20%' height={10} />
                        </View>

                        <SkeletonLoader width={'35%'} height={80} />
                    </View>
                    :

                    <View style={styles.rowView}>

                        <View style={styles.descriptionView}>
                            <Text numberOfLines={5} style={styles.descriptionText} >{item.description}</Text>
                        </View>

                        <Image source={getDefaultImage(item.urlToImage)} style={styles.image} />
                    </View>
                }
            </View>

            {/* Author/Published date and share icon */}

            <View style={[styles.contentView]}>

                {loading ?

                    <View>
                        <SkeletonLoader width='40%' height={10} />
                        <SkeletonLoader width='20%' height={10} />
                    </View>

                    :

                    <View style={styles.rowView}>

                        <View style={styles.authorView}>

                            <Text style={[styles.author, {color:theme.primary}]}>{item.author}</Text>
                            <Text style={styles.published}>{formatRelativeDate(item.publishedAt)}</Text>

                        </View>

                        <TouchableOpacity>
                            <Entypo name="share" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                }

            </View>

        </View>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(10),
    },
    Gap10: {
        gap: scale(10),
    },
    title: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    contentView: {
        marginVertical: moderateScale(8),
    },
    descriptionView: {
        width: '60%',
    },
    descriptionText: {
        fontSize: moderateScale(14),
    },
    image: {
        resizeMode: 'cover',
        height: verticalScale(80),
        width: scale(120),
    },
    authorView:{
        gap:moderateScale(2),
    },
    author:{
        fontSize:moderateScale(15),
        fontWeight:'bold',
        fontStyle:'italic'
    },
    published:{

    }

})