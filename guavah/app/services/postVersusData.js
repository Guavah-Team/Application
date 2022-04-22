import axios from 'axios'

export const postVersusData = async (data) =>{
    url = 'https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/submit-versus';

    // const versusDetails = {
    //     userSelection: data[0]['userSelection'],
    //     restaurants: [
    //         {
    //             id: data[0]['restaurants'][0]['id'],
    //             gor: data[0]['restaurants'][0]['gor'],
    //             price: data[0]['restaurants'][0]['price'],
    //             location: {
    //                 latitude: data[0]['restaurants'][0]['location']['latitude'],
    //                 longitude: data[0]['restaurants'][0]['location']['longitude']
    //             },
    //             categories: data[0]['restaurants'][0]['categories']
    //         },{
    //             id: data[0]['restaurants'][1]['id'],
    //             gor: data[0]['restaurants'][1]['gor'],
    //             price: data[0]['restaurants'][1]['price'],
    //             location: {
    //                 latitude: data[0]['restaurants'][1]['location']['latitude'],
    //                 longitude: data[0]['restaurants'][1]['location']['longitude']
    //             },
    //             categories: data[0]['restaurants'][1]['categories']
    //         }
    //     ],
    //     user: {
    //         VersusQueue: data[0]['user']['VersusQueue'],
            
    //         DailyVotes: data[0]['user']['DailyVotes'],
    //         Level: data[0]['user']['Level'],
    //         UserID: data[0]['user']['UserID'],
    //         XP: data[0]['user']['XP']
    //       }
    // }

    axios.post(url, data[0])
    .then(function (response){
        console.log(response["response"]);
        // data = JSON.stringify(data[0]);
        // console.log(data);
    })
}