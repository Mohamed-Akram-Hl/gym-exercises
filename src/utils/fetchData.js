export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '140d2c151amshccdd08ec4457238p122e87jsn7bf050d0021c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '140d2c151amshccdd08ec4457238p122e87jsn7bf050d0021c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
