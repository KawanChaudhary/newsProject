import React from 'react';
import { render } from '@testing-library/react-native';
import SkeletonLoader from '../src/Components/General/Skeleton';

describe('SkeletonLoader component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<SkeletonLoader height={100} width="100%" />);
    const skeletonBox = getByTestId('skeleton-box');
    const animatedGradient = getByTestId('animated-gradient');

    expect(skeletonBox).toBeDefined();
    expect(animatedGradient).toBeDefined();
  });
});
