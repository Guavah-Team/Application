import axios from "axios";

export const postReviewData = async (rating, review, FSQID) =>{
    axios.post("https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/submit-review", {
        FSQID: FSQID,
        UserID: '1871bbbd-11ab-4fb8-ba65-32528c7aa6ab',
        Rating: rating,
        Comment: review
    })
    .then(function (response) {
        console.log(response);
    })
}
