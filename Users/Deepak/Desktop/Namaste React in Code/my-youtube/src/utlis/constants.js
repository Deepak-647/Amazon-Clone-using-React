export const Google_API_Key = "AIzaSyDoU6JHyxObZzlFz07SMkvXzjq53Q-w0cc";
export const Youtube_Videos_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+Google_API_Key ;
export const Youtube_Search_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const VIDEO_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+Google_API_Key+"&id=";
export const CHANNEL_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+Google_API_Key+"&id=";


  export function convertToKAndMillion(number) {
    if (number != null) {
      if (number >= 1000000) {
        return (number / 1000000).toFixed(2) + 'M';
      } else if (number >= 1000) {
        return (number / 1000).toFixed(2) + 'k';
      }
      return number.toString();
    }
    return '';
  }