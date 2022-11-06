import React from "react";
import { CheckCircleFill, Chat, HeartFill, Heart, Recycle, Share }
    from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        post = {
            "handle": "@space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "tuit": "abcdef",
            "replies": 76,
            "retuit": 123,
            "likes" :122
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div> <span className="fw-bolder"> {post.userName}  <CheckCircleFill/> </span>
                        <span className = "text-muted"> {post.handle} . {post.time}</span>
                        <span className="text-muted float-end"
                              onClick={() => deleteTuitHandler(post._id)}> X </span>
                    </div>
                    {post.tuit}
                    <TuitStats
                        key={post._id} stats={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;