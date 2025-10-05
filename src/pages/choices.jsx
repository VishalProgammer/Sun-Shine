import { useState } from "react"
import "./choices.css"
import { Reader } from "./reading";
import { Quiz } from "./quiz";
import { Story } from "./story";


export function Choices(){
    const [index, setindex] = useState(0);
    function opt1() {
        setindex(prevIndex => prevIndex + 1)
    }
    function opt2() {
        setindex(prevIndex => prevIndex + 2)
    }
    function opt3() {
        setindex(prevIndex => prevIndex + 3)
    }

if(index == 0){    
    return(<div id="main-c">
        <div id="header-c">
            <h1>How do you like to learn?</h1>
        </div>
        <div id="options-1-c">
            <img onClick={opt1} src="./reading.png" alt="reading.png" />
            <img onClick={opt2} src="./story.png" alt="story.png" />
        </div>
        <div id="options-2-c">
            <img onClick={opt3} src="./quiz.png" alt="quiz.png" />
        </div>
        
    </div>)}
    else if(index == 1){
        return(<Reader/>)
    }else if(index == 2){
        return(<Story/>)
    }else if(index == 3){
        return(<Quiz/>)
    }

}