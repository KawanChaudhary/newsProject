import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Home from '../src/Screens/Home/Home';
import { ThemeProvider } from '../src/Contexts/ThemeContext';
import useCommon from '../src/Hooks/useCommon';
import { initialState, initialStateArticles } from '../src/InitialState/APIResponse';
import { formatRelativeDate } from '../src/Utils/GlobalUtil';

jest.mock('../src/Hooks/useCommon', () => ({
    __esModule: true,
    default: jest.fn(),
}));

const mockFetchNews = jest.fn();
const mockUseCommon = useCommon as jest.MockedFunction<typeof useCommon>;

describe('<Home />', () => {
    beforeEach(() => {
        mockUseCommon.mockReturnValue({
            fetchNews: mockFetchNews,
            news: {
                articles: [],
                status: '',
                totalResults: 0
            },
            loading: true,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with loading state', async () => {
        const { getByTestId } = render(
            <ThemeProvider>
                <Home />
            </ThemeProvider>,
        );

        await waitFor(() => expect(mockFetchNews).toHaveBeenCalledTimes(1));

        const flatList = getByTestId('flatlist');
        expect(flatList).toBeTruthy();
    });

    it('renders correctly with articles', async () => {
        mockUseCommon.mockReturnValueOnce({
            fetchNews: mockFetchNews,
            news: initialState,
            loading: false,
        });

        const { getByText } = render(
            <ThemeProvider>
                <Home />
            </ThemeProvider>,
        );

        await waitFor(() => expect(mockFetchNews).toHaveBeenCalledTimes(1));

        const titleElement = getByText(initialState.articles[0].title);
        const authorElement = getByText(initialState.articles[0].author);
        const descriptionElement = getByText(initialState.articles[0].description);
        const publishedElement = getByText(formatRelativeDate(initialState.articles[0].publishedAt));

        expect(titleElement).toBeTruthy();
        expect(authorElement).toBeTruthy();
        expect(descriptionElement).toBeTruthy();
        expect(publishedElement).toBeTruthy();
    });
});
