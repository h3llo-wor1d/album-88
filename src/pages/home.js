import { Component } from "react";
import Leftbar from "../components/leftbar";
import Playbox from "../components/playbox";
import LiveIndicator from "../components/liveIndicator";
import { Timeline } from 'react-twitter-widgets'

export default class Home extends Component {
    render() {
        return (
            <div style={{width: "100vw"}}>
                <Leftbar />
                <Playbox />
            </div>
        )
    }
}