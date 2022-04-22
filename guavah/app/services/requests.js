import axios from "axios";

export const getDetailedRestaurantData = async ({latitude, longitude, userRadius}) => {
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/home?latlong=${latitude},${longitude}&radius=${userRadius}`;
  // url = "https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/home?latlong=33.4936,-117.1484&radius=2000";
  // console.log(latitude)
  // console.log(longitude)
  try{
      const response = await axios.get(url);
      let sections = [];
      sections.push(response.data["messageA"]);
      sections.push(response.data["sectionA"]);
      sections.push(response.data["messageB"]);
      sections.push(response.data["sectionB"]);
      sections.push(response.data["sectionC"]);
      console.log(sections[4]);
      // console.log(sections[4])
      return sections;
    }catch (e) {
      console.log(e);
  }
};

export const getSearchRestaurantData = async (restaurantName, minPrice, {latitude, longitude, userRadius}) => {
  // console.log(latitude)
  // console.log(longitude)
  // console.log(userRadius)
  const restaurant = restaurantName.replace(' ', '%20');
  // url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=1600&latlong=33.4936,-117.1484&term=${restaurant}&category=13000&isOpen=false&doChains=true&minPrice=1&maxPrice=2&limit=10`
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=${userRadius}&latlong=${latitude},${longitude}&term=${restaurant}&category=13000&isOpen=True&doChains=False&minPrice=${minPrice}&maxPrice=4&limit=50`
  try{
    const response = await axios.get(url);
    let sections = [];
    sections.push(response.data["body"]);
    return sections;
  }catch (e) {
    console.log(e);
  }
}

export const getOpeningSearchRestaurantData = async (minPrice, {latitude, longitude, userRadius}) => {
  // console.log(latitude)
  // console.log(longitude)
  // console.log(userRadius)
  // url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=1600&latlong=33.4936,-117.1484&term=${restaurant}&category=13000&isOpen=false&doChains=true&minPrice=1&maxPrice=2&limit=10`
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=${userRadius}&latlong=${latitude},${longitude}&term=&category=13000&isOpen=True&doChains=False&minPrice=${minPrice}&maxPrice=4&limit=50`
  try{
    const response = await axios.get(url);
    let sections = [];
    sections.push(response.data["body"]);
    return sections;
  }catch (e) {
    console.log(e);
  }
}

export const getOpeningSearchRestaurantData2 = async (url) => {
  // console.log(latitude)
  // console.log(longitude)
  // console.log(userRadius)
  // url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=1600&latlong=33.4936,-117.1484&term=${restaurant}&category=13000&isOpen=false&doChains=true&minPrice=1&maxPrice=2&limit=10`
  // url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=${userRadius}&latlong=${latitude},${longitude}&term=&category=13000&isOpen=True&doChains=False&minPrice=${minPrice}&maxPrice=4&limit=50`
  try{
    const response = await axios.get(url);
    let sections = [];
    sections.push(response.data["body"]);
    return sections;
  }catch (e) {
    console.log(e);
  }
}

export const getRestaurantReviews = async (restaurantId) => {
  console.log(restaurantId);
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/get-restaurant-reviews?FSQID=${restaurantId}`;
  try{
    const response = await axios.get(url);
    let sections = [];
    sections.push(response.data);
    // console.log(sections);
    return sections;
  }catch (e) {
    console.log(e);
  }
}

export const getVersusData = async (userId) => {
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/display-versus?UserID=${userId}`;
  try{
    const response = await axios.get(url);
    let sections = [];
    sections.push(response.data);
    // console.log(sections);
    return sections;
  } catch (e){
    console.log(e);
  }
};

export const getUserData = async (userId) => {
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/get-user?UserID=${userId}`
  try{
    const response = await axios.get(url);
    let sections = [];
    // sections.push(response.data['body']);
    sections.push(response.data['body']['Name']);
    sections.push(response.data['body']['Level']);
    sections.push(response.data['body']['ProfilePhoto']);
    sections.push(response.data['body']['Radius']);
    return sections;
  }catch (e) {
    console.log(e);
  }
}

export const getUserDataSettings = async (userId) => {
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/get-user?UserID=${userId}`
  try{
    const response = await axios.get(url);
    let sections = [];
    // sections.push(response.data['body']);
    sections.push(response.data['body']['Name']);
    sections.push(response.data['body']['Email']);
    sections.push(response.data['body']['ProfilePhoto']);
    sections.push(response.data['body']['Radius']);
    sections.push(response.data['body']['Vegan']);
    sections.push(response.data['body']['DarkMode']);
    // console.log(sections);
    return sections;
  }catch (e) {
    console.log(e);
  }
}
