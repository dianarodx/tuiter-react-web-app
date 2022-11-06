import React, {useState} from "react";
import {Image, FiletypeGif, BarChart, EmojiSmile, PinMap}
    from "react-bootstrap-icons";
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img className="rounded-circle" width={60}
                     src="../../images/nasa.png"/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <span className="pe-1"> <Image/> </span>
                        <span className="pe-1"> <FiletypeGif/> </span>
                        <span className="pe-1"> <BarChart/> </span>
                        <span className="pe-1"> <EmojiSmile/> </span>
                        <span className="pe-1"> <PinMap/> </span>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;