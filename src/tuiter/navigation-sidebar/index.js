import React from "react";
import {Twitter} from "react-bootstrap-icons";
import { HouseFill } from "react-bootstrap-icons";
import { Hash } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import { BookmarkFill } from "react-bootstrap-icons";
import { ListCheck } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { ChatDotsFill } from "react-bootstrap-icons";
import { Asterisk} from "react-bootstrap-icons";


const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item"> <Twitter/> Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <HouseFill/> Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <Hash/> Explore
            </a>
            <a className={`list-group-item
                    ${active === 'lab'?'active':''}`}>
                <Asterisk/> Labs
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <BellFill/> Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <EnvelopeFill/> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <BookmarkFill/> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <ListCheck/> Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <PersonFill/> Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <ChatDotsFill/> More
            </a>
        </div>
    );
};
export default NavigationSidebar;