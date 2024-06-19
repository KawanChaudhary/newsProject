import React from 'react';
import { render } from '@testing-library/react-native';
import NewsCard from '../src/Components/General/NewsCard';
import { Article } from '../src/Types/types';
import { defaultTheme } from '../src/Constants/Theme/theme';
import { formatRelativeDate, getDefaultImage } from '../src/Utils/GlobalUtil';

const mockItemWithImage : Article = {
  source: { id: '1', name: 'Mock Source' },
  author: 'Mock Author',
  title: 'Mock Title',
  description: 'Mock Description',
  url: 'https://example.com',
  urlToImage: 'https://example.com/image.jpg',
  publishedAt: '2024-06-19T12:00:00Z',
  content: 'Mock Content',
};

const mockItemWithoutImage : Article = {
  source: { id: '1', name: 'Mock Source' },
  author: 'Mock Author',
  title: 'Mock Title',
  description: 'Mock Description',
  url: 'https://example.com',
  urlToImage: null,
  publishedAt: '2024-06-19T12:00:00Z',
  content: 'Mock Content',
};

jest.mock('../assets/images/default.jpg', () => {
  return 'mocked-default-image-path'; 
});


describe('<NewsCard />', () => {

  it('renders correctly with loaded state', () => {

    const { getByText, getByTestId } = render(
      <NewsCard item={mockItemWithImage} theme={defaultTheme} loading={false} />,
    );

    const titleText = getByText(mockItemWithImage.title);
    const descriptionText = getByText(mockItemWithImage.description);
    const authorText = getByText(mockItemWithImage.author);
    const publishedAtText = getByText(formatRelativeDate(mockItemWithImage.publishedAt));

    const imageElement = getByTestId('news-card-image');

    expect(imageElement).toBeDefined();
    expect(imageElement.props.source).toStrictEqual(getDefaultImage(mockItemWithImage.urlToImage));

    expect(titleText).toBeTruthy();
    expect(descriptionText).toBeTruthy();
    expect(authorText).toBeTruthy();
    expect(publishedAtText).toBeTruthy();
  });

  test('renders default image correctly', () => {

    const { getByTestId } = render(
      <NewsCard item={mockItemWithoutImage} theme={defaultTheme} loading={false} />
    );
  
    const imageElement = getByTestId('news-card-image');
    expect(imageElement).toBeDefined();
    expect(imageElement.props.source).toStrictEqual('mocked-default-image-path');
  });

});
