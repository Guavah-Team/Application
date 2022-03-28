import axios from "axios";

export const getDetailedRestaurantData = async (latitude, longitude) => {
  // url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/home?latlong=${latitude},${longitude}&radius=2000`;
  url = "https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/home?latlong=33.4936,-117.1484&radius=2000";
    try{
      const response = await axios.get(url);
      let sections = [];
      sections.push(response.data["messageA"]);
      sections.push(response.data["sectionA"]);
      sections.push(response.data["messageB"]);
      sections.push(response.data["sectionB"]);
      // console.log(sections);
      return sections;
    }catch (e) {
      console.log(e);
  }
};

export const getSearchRestaurantData = async (restaurantName) => {
  const restaurant = restaurantName.replace(' ', '%20');
  console.log(restaurant);
  // url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=1600&latlong=33.9806,-117.3755&term=${restaurant}&category=13000&isOpen=false&doChains=true&minPrice=1&maxPrice=2&limit=10`
  try{
    const response = await axios.get(url);
    let sections = [];
    sections.push(response.data["body"]);
    return sections;
  }catch (e) {
    console.log(e);
  }
}