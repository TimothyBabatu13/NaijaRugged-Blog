import Albums from "./Albums";
import Song from "./Song";
import Video from "./Video";
import Mixtapes from "./Mixtapes";


const AllData = [
    {
        type: "albums",
        details: [Albums]
    },
    {
        type: "songs",
        details: [Song]
    },
    {
        type: "videos",
        details: [Video]
    },
    {
        type: "mixtapes",
        details: [Mixtapes]
    }
];
export default AllData