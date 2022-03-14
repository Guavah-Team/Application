import axios from "axios";



export const getDetailedRestaurantData = async () => {
    url = "https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/home?latlong=33.9806,-117.3755&radius=2000";
      try{
          const response = await axios.get(url);
          let sections = [];
          sections.push(response.data["messageA"]);
          sections.push(response.data["sectionA"]);
          sections.push(response.data["messageB"]);
          sections.push(response.data["sectionB"]);
          return sections;
      }catch (e) {
        console.log(e);
    }
};

export const getSearchRestaurantData = async ({restaurantName}) => {
  url = `https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/search?radius=1600&latlong=33.9806,-117.3755&term=&category=13000&isOpen=false&doChains=true&minPrice=1&maxPrice=2&limit=10`
}