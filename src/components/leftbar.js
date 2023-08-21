import { Component } from "react";
import RadioButton from "./RadioButton";
import LiveIndicator from "./liveIndicator";

export default class Leftbar extends Component {
    render() {
        return (
            <div className="leftbar" style={{display: "flex", flexDirection: "row", columnGap: "10px", position: "flex", top: "5px", left: "5px"}}>
                <div style={{display: "flex", flexDirection: "column", rowGap: "10px"}}>
                    <img src={"./resources/88.png"} width={"100px"} alt={"verticalLogo"} />
                    {/*<RadioButton />*/}
                </div>
            </div>
            
        )
    }
}