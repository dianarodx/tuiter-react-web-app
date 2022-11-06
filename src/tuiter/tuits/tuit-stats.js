import React from "react";
import {Recycle, Heart, Share, Chat, HeartFill} from "react-bootstrap-icons";
const TuitStats = (
    {
        stats = {
            "handle": "@space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "tuit": "abcdef",
            "replies": 76,
            "retuits": 123,
            "likes" : 122
        }
    }
) => {
    return(
        <div className="row">
            <div className="col-3">
                <Chat/> {stats.replies}
            </div>

            <div className="col-3">
                <Recycle/> {stats.retuits}
            </div>

            <div className="col-3">
                {stats.liked ? <HeartFill/> : <Heart/>} {stats.likes}
            </div>

            <div className="col-3">
                <Share/>
            </div>

        </div>
    );
};
export default TuitStats;