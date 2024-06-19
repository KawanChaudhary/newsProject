import { ApiResponse, Article } from "../Types/types";

export const initialStateArticles: Article[] = [
    {
        "source": {
            "id": "1",
            "name": "Gizmodo.com"
        },
        "author": "Author One",
        "title": "Breaking News: Bitcoin Reaches New Highs",
        "description": "Bitcoin prices surge to unprecedented levels in the latest trading session.",
        "url": "https://gizmodo.com/bitcoin-new-highs",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a1.jpg",
        "publishedAt": "2024-01-23T12:00:00Z", // 12:00 UTC
        "content": "Bitcoin has reached new highs, with prices surging in the latest trading session. Experts believe this trend will continue as more investors jump on the cryptocurrency bandwagon..."
    },
    {
        "source": {
            "id": "2",
            "name": "Gizmodo.com"
        },
        "author": "Author Two",
        "title": "Tech Giants Announce New Collaboration",
        "description": "Leading tech companies are teaming up to revolutionize the industry.",
        "url": "https://gizmodo.com/tech-giants-collaboration",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a2.jpg",
        "publishedAt": "2024-06-19T11:00:00Z", // 2 hours ago from 13:00 UTC
        "content": "In an unprecedented move, leading tech companies have announced a new collaboration aimed at revolutionizing the industry. This partnership promises to bring innovative solutions and cutting-edge technology..."
    },
    {
        "source": {
            "id": "3",
            "name": "Gizmodo.com"
        },
        "author": "Author Three",
        "title": "Climate Change: Urgent Call to Action",
        "description": "Scientists warn of the dire consequences of inaction on climate change.",
        "url": "https://gizmodo.com/climate-change-action",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a3.jpg",
        "publishedAt": "2024-06-19T10:00:00Z", // 3 hours ago from 13:00 UTC
        "content": "Scientists around the world are issuing an urgent call to action to combat climate change. The latest data indicates that without significant measures, the consequences could be catastrophic..."
    },
    {
        "source": {
            "id": "4",
            "name": "Gizmodo.com"
        },
        "author": "Author Four",
        "title": "New Discoveries in Space Exploration",
        "description": "Astronomers have made significant discoveries that could change our understanding of the universe.",
        "url": "https://gizmodo.com/space-exploration-discoveries",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a4.jpg",
        "publishedAt": "2024-06-19T09:00:00Z", // 4 hours ago from 13:00 UTC
        "content": "In recent developments, astronomers have made significant discoveries that could change our understanding of the universe. These findings shed light on the complexities of space and the potential for future exploration..."
    },
    {
        "source": {
            "id": "5",
            "name": "Gizmodo.com"
        },
        "author": "Author Five",
        "title": "Healthcare Advances: New Treatment Options",
        "description": "Medical researchers have developed new treatment options for chronic diseases.",
        "url": "https://gizmodo.com/healthcare-advances-treatment",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a5.jpg",
        "publishedAt": "2024-06-19T17:09:00Z", // 30 minutes ago from 13:00 UTC
        "content": "Medical researchers have announced new treatment options for chronic diseases, providing hope for patients worldwide. These advancements in healthcare are expected to improve the quality of life for many individuals..."
    },
];


export const initialState: ApiResponse = {
    status: "ok",
    totalResults: 5,
    articles: initialStateArticles,
};
