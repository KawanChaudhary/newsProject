import React from 'react';
import { View, StyleSheet, Animated, Dimensions, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../../Utils/ResponsiveUtil';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SkeletonLoader = ({ height = 20, width = '100%' }) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
  });

  const skeletonColor = colorScheme === 'dark' ? '#333333' : '#e0e0e0';
  const gradientColors = colorScheme === 'dark' 
    ? ['#333333', 'rgba(255,255,255,0.1)', '#333333'] 
    : ['#e0e0e0', 'rgba(255,255,255,0.5)', '#e0e0e0'];

  return (
    <View style={[styles.skeletonBox, { height, width, backgroundColor: skeletonColor }]}>
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, transform: [{ translateX }] }}>
        <LinearGradient
          colors={gradientColors}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonBox: {
    overflow: 'hidden',
    borderRadius: 0,
    marginBottom:moderateScale(4),
  },
});

export default SkeletonLoader;
