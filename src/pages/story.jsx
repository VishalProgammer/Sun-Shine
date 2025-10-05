import { useRef, useState } from "react"
import "./story.css"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { div } from "three/tsl"
import { Choices } from "./choices"

export function Story(){
    const [index, setindex] = useState(0)
    const [menu, setmenu] = useState(false)
    const aa = useRef(new Audio('./aa.mp3'))
    const a1 = useRef(new Audio('./SA1.mp3'))
    const a2 = useRef(new Audio('./SA2.mp3'))
    const a3 = useRef(new Audio('./SA3.mp3'))
    const a4 = useRef(new Audio('./SA4.mp3'))
    const a5 = useRef(new Audio('./SA5.mp3'))
    const a6 = useRef(new Audio('./SA6.mp3'))
    const a7 = useRef(new Audio('./SA7.mp3'))
    const a8 = useRef(new Audio('./SA8.mp3'))

    if(index==0){
        aa.current.pause();
    }
    function next(){
        a1.current.play();
        setindex(prevIndex => prevIndex + 1)
        aa.current.volume = 0.15
        aa.current.play()
    }
    function back(){
        setindex(prevIndex => prevIndex - 1)
    }

    function toMenu() {
        setmenu(true)
    }

    function Footer() {
        return(
            <div id="footer-st">
                <button onClick={back}>&larr;</button>
                <button onClick={next}>&rarr;</button>
            </div>
        )
    }
    function Header(){
        function toMain() {
            setindex(0)
            aa.current.pause();
            a1.current.pause();
            a2.current.pause();
            a3.current.pause();
            a4.current.pause();
            a5.current.pause();
            a6.current.pause();
            a7.current.pause();
            a8.current.pause();
        }
        return(<><div id="header-back-s"><br /><button onClick={toMain}>&larr;</button></div></>)
    }

    function S0(){
        return(<>
        <div id="header-back"><button onClick={toMenu}>&larr;</button></div>
            <div id="main0">
                <div id="main-text">
                    <h1>The Story of Alex</h1>
                    <br />
                    <p>
                        This is a story about a normal farmer from Celifornia.
                        It shows the struggles of the farmers and citizens during a solar flare.
                        Aim of this story is to educate the viewer on the upcoming problems from far away in space!
                        <br />
                        Enjoy  the experience!!
                    </p>
                    <br /><br />
                    <button onClick={next}>Start </button>
                </div>
                <img id="img0" src="./farmer.png" alt="farmer" />
            </div></>
        )
    }

    

    function S1(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            x:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
            
            

        },{scope:scene});

        function next1(){
            a2.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }

        
        return(
            <div id="main-st1" ref={scene}>
                <div id="story-img">
                    <img src="./farmer wave.png" alt="farmer wave.png" />
                </div>
                <div id="story-text">
                    <pre>This </pre>
                    <pre>is </pre>
                    <pre>Alex, </pre>
                    <pre>a </pre>
                    <pre>35 </pre>
                    <pre>year </pre>
                    <pre>old </pre>
                    <pre>farmer </pre>
                    <pre>from </pre>
                    <pre>California</pre>
                    <br /><br />
                    <div id="str-btn">
                        {/* <button onClick={back}>&larr;</button> */}
                        <button onClick={next1}>&rarr;</button>
                    </div>
                
                </div>
                
            </div>
        )
    }

    function S2(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            z:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
            
        

        },{scope:scene});

        function next2(){
            a3.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }
        function back1(){
            a1.current.play();
            setindex(prevIndex => prevIndex - 1)
            
        }

        return(
            <div id="main-st2" ref={scene}>
                <div id="story-img">
                    <img  id="img2" src="./farmer1.gif" alt="farmer 1.gif" />
                </div>
                <div id="story-text">
                    <pre>His </pre>
                    <pre>Family </pre>
                    <pre>has </pre>
                    <pre>been </pre>
                    <pre>traditionally </pre>
                    <pre>farming </pre>
                    <pre>for </pre>
                    <pre>3 </pre>
                    <pre>generations </pre>
                    <pre>now</pre>
                    <br /><br />
                    <div id="str-btn">
                        <button onClick={back1}>&larr;</button>
                        <button onClick={next2}>&rarr;</button>  
                    </div>
                    
                </div>
                
            </div>
        )
    }

    function S3(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            z:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
            
            

        },{scope:scene});

        function next3(){
            a4.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }
        function back2(){
            a2.current.play();
            setindex(prevIndex => prevIndex - 1)
            
        }
        
        return(
            <div id="main-st2" ref={scene}>
                <div id="story-img">
                    <img id="img2" src="./farmer2.gif" alt="farmer 1.gif" />
                </div>
                <div id="story-text">
                <pre>But </pre>
                    <pre>Alex </pre>
                    <pre>uses </pre>
                    <pre>much </pre>
                    <pre>modern </pre>
                    <pre>ways </pre>
                    <pre>to </pre>
                    <pre>farm, </pre>
                    <pre>like </pre>
                    <pre>GPS </pre>
                    <pre>and </pre>
                    <pre>Satellite </pre>
                    <pre>weather </pre>
                    <pre>forcasting</pre>
                    <br /><br />
                    <div id="str-btn">
                        <button onClick={back2}>&larr;</button>
                        <button onClick={next3}>&rarr;</button>
                    </div>
                </div>
                
            </div>
        )
    }

    function S4(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            z:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
            
            

        },{scope:scene});

        function next4(){
            a5.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }
        function back3(){
            a3.current.play();
            setindex(prevIndex => prevIndex - 1)
            
        }
        
        return(
            <div id="main-st2" ref={scene}>
                <div id="story-img">
                    <img id="img2" src="./farmer3.gif" alt="farmer 3.gif" />
                </div>
                <div id="story-text">
                    <pre>Mostly </pre>
                    <pre>the </pre>
                    <pre>tech </pre>
                    <pre>boost </pre>
                    <pre>the </pre>
                    <pre>Productivity </pre>
                    <pre>and </pre>
                    <pre>Yield </pre>
                    <br /><br />
                    <div id="str-btn">
                        <button onClick={back3}>&larr;</button>
                        <button onClick={next4}>&rarr;</button>
                    </div>

                </div>
                
            </div>
        )
    }

    function S5(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            z:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
            
            

        },{scope:scene});

        function next5(){
            a6.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }
        function back4(){
            a4.current.play();
            setindex(prevIndex => prevIndex - 1)
            
        }
        
        return(
            <div id="main-st2" ref={scene}>
                <div id="story-img">
                    <img id="img2" src="./sun1.gif" alt="farmer 3.gif" />
                </div>
                <div id="story-text">
                    <pre>But </pre>
                    <pre>sometimes </pre>
                    <pre>sun </pre>
                    <pre>send </pre>
                    <pre>strong </pre>
                    <pre>Solar </pre>
                    <pre>Flares </pre>
                    <pre>towards </pre>
                    <pre>earth</pre>
                    <br /><br />
                    <div id="str-btn">
                        <button onClick={back4}>&larr;</button>
                        <button onClick={next5}>&rarr;</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }

    function S6(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            z:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
                        
        },{scope:scene});

        function next6(){
            a7.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }
        function back5(){
            a5.current.play();
            setindex(prevIndex => prevIndex - 1)
            
        }
        
        return(
            <div id="main-st2" ref={scene}>
                <div id="story-img">
                    <img id="img2" src="./nightout.gif" alt="farmer 3.gif" />
                </div>
                <div id="story-text">
                    <pre>Sometimes </pre>
                    <pre>these </pre>
                    <pre>solar </pre>
                    <pre>flares </pre>
                    <pre>cause </pre>
                    <pre>hours </pre>
                    <pre>long </pre>
                    <pre>blackouts </pre>
                    <pre>in </pre>
                    <pre>cities</pre>
                    <pre>. . . </pre>
                    <br /><br />
                    <div id="str-btn">
                        <button onClick={back5}>&larr;</button>
                        <button onClick={next6}>&rarr;</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }

    function S7(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            z:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
                        
        },{scope:scene});

        function next7(){
            a8.current.play();
            setindex(prevIndex => prevIndex + 1)
            
        }
        function back6(){
            a6.current.play();
            setindex(prevIndex => prevIndex - 1)
            
        }
        
        return(
            <div id="main-st2" ref={scene}>
                <div id="story-img">
                    <img id="img2" src="./sad.gif" alt="farmer 3.gif" />
                </div>
                <div id="story-text">
                    <pre>Alex's </pre>
                    <pre>GPS </pre>
                    <pre>stopped </pre>
                    <pre>working, </pre>
                    <pre>Weather </pre>
                    <pre>Forcast </pre>
                    <pre>was </pre>
                    <pre>wrong, </pre>
                    <pre>Crops </pre>
                    <pre>suffered</pre>
                    <pre>. . . </pre>
                    <br /><br />
                    <div id="str-btn">
                        <button onClick={back6}>&larr;</button>
                        <button onClick={next7}>&rarr;</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }

    function S8(){
        const scene = useRef()

        useGSAP(() => {
          gsap.from('#story-img',{
            z:-150,
            opacity:0,
            duration:0.5,
            delay:0.5
          })
          const tl = gsap.timeline()
          tl.from('pre',{
            opacity:0,
            duration:0.5,
            stagger:0.5,
            delay:1
          })
          tl.from('button',{
            opacity:0,
            duration:1,
            delay:1.5
          })
                        
        },{scope:scene});

        function home(){
            setindex(0)
            aa.current.pause();
            
        }
        function back(){
            setindex(0)
            aa.current.pause();
            a1.current.pause();
            a2.current.pause();
            a3.current.pause();
            a4.current.pause();
            a5.current.pause();
            a6.current.pause();
            a7.current.pause();
            a8.current.pause();
            next()
        }
        function back7(){
            a7.current.play();
            setindex(prevIndex => prevIndex - 1)
            
        }
        
        return(
            <div id="main-st2" ref={scene}>
                <div id="story-img">
                    <img id="img2" src="./study.gif" alt="farmer 3.gif" />
                </div>
                <div id="story-text">
                    <pre>NASA </pre>
                    <pre>studies </pre>
                    <pre>the </pre>
                    <pre>sun </pre>
                    <pre>everyday. </pre>
                    <pre>Their </pre>
                    <pre>warnings </pre>
                    <pre>help </pre>
                    <pre>farmers </pre>
                    <pre>like </pre>
                    <pre>Alex </pre>
                    <pre>stay </pre>
                    <pre>prepared </pre>
                    <pre>. . . </pre>
                    <br /><br />
                    <div id="str-btn">
                        <button onClick={back7}>&larr;</button>
                        <br />
                        <button onClick={back}>Replay</button>
                        <button onClick={home}>Home</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }



if(menu){
    return(<Choices/>)
}
if (index == 0) {
    return(<S0/>)
}else if(index == 1){
    return(<><Header/><S1/></>)
}else if(index == 2){
    return(<><Header/><S2/></>)
}else if(index == 3){
    return(<><Header/><S3/></>)
}else if(index == 4){
    return(<><Header/><S4/></>)
}else if(index == 5){
    return(<><Header/><S5/></>)
}else if(index == 6){
    return(<><Header/><S6/></>)
}else if(index == 7){
    return(<><Header/><S7/></>)
}else if(index == 8){
    return(<><Header/><S8/></>)
}

// return(<S6/>)

}