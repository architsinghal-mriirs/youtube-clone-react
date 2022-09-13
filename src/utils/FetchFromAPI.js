import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  // method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '219feaf027msh86168bf51c1b8cfp145dbfjsn570108d6dc7a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data.items);
//   console.log(process.env);
// }).catch(function (error) {
// 	console.error(error);
// });

// example :- baseURL/getVideos

export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}