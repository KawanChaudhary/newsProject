import React from 'react';
import { render } from '@testing-library/react-native';
import CommonFlatlist from '../src/Components/Common/CommonFlatlist';
import { ThemeProvider } from '../src/Contexts/ThemeContext';
import { Article } from '../src/Types/types';
import { initialStateArticles } from '../src/InitialState/APIResponse';
import { formatRelativeDate } from '../src/Utils/GlobalUtil';

const mockArticles : Article[] = initialStateArticles

describe('<CommonFlatlist />', () => {
  it('renders correctly with articles', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CommonFlatlist articles={mockArticles} loading={false} />
      </ThemeProvider>,
    );

    mockArticles.forEach(article => {
      const titleElement = getByText(article.title);
      const authorElement = getByText(article.author);
      const descriptionElement = getByText(article.description);
      const publishedAtElement = getByText(formatRelativeDate(article.publishedAt));
      expect(titleElement).toBeTruthy();
      expect(authorElement).toBeTruthy();
      expect(descriptionElement).toBeTruthy();
      expect(publishedAtElement).toBeTruthy();
    });
  });

  it('renders correctly with loading state', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <CommonFlatlist articles={[]} loading={true} />
      </ThemeProvider>,
    );

    const flatListContainer = getByTestId('flatlist');
    expect(flatListContainer).toBeTruthy();
  });
});
