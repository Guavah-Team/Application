import axios from "axios";

export const postReviewData = async (rating, review, FSQID) =>{
    axios.post("https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/submit-review", {
        FSQID: FSQID,
        UserID: 'ad6c6db6-4b05-4519-b002-f7dd20860f36',
        Rating: rating,
        Comment: review
    })
    .then(function (response) {
        console.log(response);
    })
}
