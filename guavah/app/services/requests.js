import axios from "axios";



export const getDetailedRestaurantData = async () => {
    url = "https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/home?latlong=33.9806,-117.3755&radius=2000";
    // await axios
    //   .get(url)
    //   .then(function (response) {
    //     const fetchedData = response.data["body"];
    //     console.log("test");
    //     return fetchedData.data;
    //   })
    //   .catch(function (error) {
    //     if (error.response)
    //       // error from server
    //       console.log(error.response.data.message);
    //     else console.log("Error Occured. Please try Again.!"); // error from app side
    //   });

      try{
          const response = await axios.get(url);
        //   console.log(response);
          return response.data["sectionA"];
      }catch (e) {
        console.log(e);
      }
};

