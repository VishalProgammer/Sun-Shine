import { useState, useRef } from "react"
import { Choices } from "./choices"
import "./reading.css"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { Quiz } from "./quiz"


export function Reader(){
    const [menu, setmenu] = useState(false)
    const [quiz, setquiz] = useState(false)
    const [index, setindex] = useState(0)

    function toMenu() {
        setindex(0)
    }

    function next() {
        setindex(prevIndex => prevIndex + 1)
    }

    function back() {
        setindex(prevIndex => prevIndex - 1)
        
    }
    function R0(){
        function toMain() {
            setmenu(true)
        }
        return(<>
        <div id="header-back-r"><button onClick={toMain}>&larr;</button></div>
            <div id="main0">
                <div id="main-text">
                    <h1>Reading Cards</h1>
                    <br />
                    <p>
                        This section contain a set of reading cards, 
                        each card contains a fun fast or infortion about the Sun & Solar Flares.
                        
                        You can test your knowledge in quiz after reading!
                        <br />
                        Enjoy  Reading!!
                    </p>
                    <br /><br />
                    <button onClick={next}>Start </button>
                </div>
                <img id="img0" src="./read0.png" alt="farmer" />
            </div></>
        )
    }

    function R1() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r1.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>Space Weather</h1>
                    <br />
                    <p>
                    Changes in the space environment caused by the Sun
                    Space weather means the variations in space caused by the Sun’s activity — 
                    like solar flares and the solar wind. These changes can affect Earth’s atmosphere and our technology.
                    </p>
                    <br />
                    {/* <button onClick={back}>&larr;</button> */}
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R2() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r2.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>Causes of Space Weather</h1>
                    <br />
                    <p>
                    Solar flares and coronal mass ejections (CMEs) release huge bursts of energy and charged particles from the Sun. 
                    When these reach Earth, they can disturb satellites and communication systems.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R3() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});


        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r3.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>Effect on the farmers</h1>
                    <br />
                    <p>
                    Solar storms can interfere with satellite signals, making GPS and forecasts unreliable. 
                    This hurts farmers who depend on accurate data for planting and harvesting.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R4() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});


        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r4.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>GPS in Farming</h1>
                    <br />
                    <p>
                    To guide tractors and monitor crops more accurately 
                    Modern farmers use GPS for precise planting, irrigation, 
                    and harvesting. It saves time, reduces waste, and improves crop yield.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R5() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r5.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>
                    Solar flare impact on technology
                    </h1>
                    <br />
                    <p>
                    Solar flares release strong radiation that can mess with satellite operations and radio communication on Earth, especially near the poles.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R6() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r6.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>
                        Who is affected by space weather
                    </h1>
                    <br />
                    <p>
                    Space weather touches many lives — it can disrupt flights, damage satellites, confuse GPS users, and even cause power outages
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R7() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img7-r" src="./r7.jpg" alt="farmer" />
                <div id="main-text-r">
                    <h1>
                    Beautiful effect of space weather
                    </h1>
                    <br />
                    <p>
                    When solar particles hit Earth’s atmosphere, they make colorful lights near the poles called auroras — a stunning but harmless side effect of space weather.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R8() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r8.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>
                    Distance of the Sun from Earth
                    </h1>
                    <br />
                    <p>
                    Even though the Sun is so far away, its storms still reach us. That’s how powerful the Sun’s magnetic energy can be.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R9() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r9.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>
                    NASA’s role in space weather
                    </h1>
                    <br />
                    <p>
                    NASA monitors solar activity using satellites to forecast storms. These warnings help people like farmers prepare before disruptions happen.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function R10() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        function next1(){
            a2.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./r10.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>
                    How people can stay safe:
                    </h1>
                    <br />
                    <p>
                    By checking space weather updates and official warnings, people can protect their equipment and adjust their plans when solar storms are expected.
                    </p>
                    <br />
                    <button onClick={back}>&larr;</button>
                    <button onClick={next}>&rarr; </button>
                </div>
                
            </div>
        </div>)
    }

    function RR() {

        const scene = useRef()

        useGSAP(() => {
        
            gsap.from("#main-r",{
                x:1500,
                opacity:0,
                duration:0.5
            })

        },{scope:scene});

        function reset(){
            setindex(1)
            
        }
        function home(){
            setindex(true)
            
        }
        function quiz(){
            setquiz(true)
        }

        return(<div ref={scene}>
        <div id="header-back-r"><button onClick={toMenu}>&larr;</button></div>
            <div id="main-r">
                <img id="img1-r" src="./rr.png" alt="farmer" />
                <div id="main-text-r">
                    <h1>
                    You have Finished all the Cards!
                    </h1>
                    <br />
                    <p>
                    What do you want to do next?
                    </p>
                    <br />
                    <button onClick={reset}>Restart</button>
                    <button onClick={home}>Home</button>
                    <button onClick={quiz}>Quiz</button>
                </div>
                
            </div>
        </div>)
    }

    if(menu == true){
        return(<Choices/>)
    }else if (quiz == true) {
        return(<Quiz/>)
    }else if (index == 0){
        return(<R0/>)
    }else if (index == 1){
        return(<R1/>)
    }else if (index == 2){
        return(<R2/>)
    }else if (index == 3){
        return(<R3/>)
    }else if (index == 4){
        return(<R4/>)
    }else if (index == 5){
        return(<R5/>)
    }else if (index == 6){
        return(<R6/>)
    }else if (index == 7){
        return(<R7/>)
    }else if (index == 8){
        return(<R8/>)
    }else if (index == 9){
        return(<R9/>)
    }else if (index == 10){
        return(<R10/>)
    }else if(index > 10){
        return(<RR/>)
    }
}