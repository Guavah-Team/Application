import axios from "axios";

export const postReviewData = async (rating, review, FSQID, userId) =>{
    axios.post("https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/submit-review", {
        FSQID: FSQID,
        UserID: userId,
        Rating: rating,
        Comment: review
    })
    .then(function (response) {
        console.log(response);
    })
}

export const postSettingsData = async (userId, name, darkTheme, Vegan, radius  ) =>{
    axios.post("https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/update-settings",{
        UserID: userId,
        Name: name,
        DarkMode: darkTheme,
        Vegan: 1,
        Radius: radius,
      })
      .then(function(response){
          console.log(response);
      })
}
