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
                <div style={{
                    width: "400",
                    overflowX: "hidden",
                    position: "absolute",
                    right: "5px",
                    top: "5px"
                }}>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'album88atlanta'
                        }}
                        options={{
                            height: '600',
                            width: "400",
                        }}
                    />
                </div>
            </div>
        )
    }
}