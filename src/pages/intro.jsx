import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Sun } from '../../Sun';
import { Choices } from './choices';
import ("./intro.css")




export function Index(){
    const [index, setindex] = useState(0)

    function next(){
        setindex(prevIndex => prevIndex + 1)
    }

    function Intro(){
        return(
            <div id="intro-con">
                <div id="canva-con-i">
                    <Canvas camera={{ position: [0, 2, 25], fov: 75 }}>
                        <Suspense fallback={null}>
                        
                        <ambientLight intensity={0.5} />
                        
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        
                        <Sun />
                        <EffectComposer>
                            <Bloom 
                                intensity={0.2}             
                                luminanceThreshold={1}   
                                luminanceSmoothing={0.2}  
                            />
                        </EffectComposer>
    
                        <Environment preset="sunset" />
    
                        <OrbitControls enableZoom={false} enablePan={false} />
    
                        </Suspense>
                    </Canvas> 
                </div>
    
                <div id="des-con-i">
                    <p>Sun is Our best Friend and worst Foe!</p>
                    <br />
                    <button onClick={next}>Know How</button>
                </div>
            
            </div>
    )
    }

    if (index == 0) {
        return(<Intro/>)
    }
    else{
        return(<Choices/>)
    }
}