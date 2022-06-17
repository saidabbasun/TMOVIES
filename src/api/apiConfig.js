const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'eb20fbfd7f6075ee220d1c617e6d011f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;