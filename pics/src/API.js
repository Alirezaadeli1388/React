import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID u44I5l5fOlMKFjrRuaN2EZ4iEgYLz0AbHiwgf-qFFmY'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;