"use client"

import Segment from "@dpang1999/resume/app/_components/Segment"
import {useEffect, useMemo, useState} from "react"
import ReactPlayer from "react-player/youtube"


const Projects = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)

    },[])
    if(!isClient) return null


    return (
        <main className="text-white">
            <h1 className="text-3xl">Projects</h1>
            <Segment title="CS675 Research Project - Preconditioning for Iterative Methods">
                <li>A research project around preconditioning matrices for iterative methods to improve efficiency and robustness</li>
                <li>Serves as both a quick survey onto the topic as well as providing some emperical evaluation</li>
                <li>Written by and for students with linear algebra backgrounds, such as those from CS675 - Computational Linear Algebra</li>
                <li>The paper can be viewed <a className="text-blue-500 visited:text-indigo-500"
                 href="https://docs.google.com/document/d/1SGRDgxBdoGyhSBgaATWdWCayd6oMDmbPe0nmxsKtctY/edit?usp=sharing">here</a></li>
            </Segment>
            <Segment title="Resume Site (2023)" >
                <li>This resume site has been developed using Next.js, a React framework, and Tailwind CSS, a CSS framework</li>
                <li>The source code for this project can be seen <a className="text-blue-500 visited:text-indigo-500" href="https://github.com/dpang1999/dpang1999.github.io">here</a></li>
            </Segment>
            <Segment title="Developer – covid-tracker.ca – (2020)">
                <li>Worked with a small team to develop a website to display Covid-19 cases in Ontario over time
separated by public health units and case type</li>
                <li>Responsible for the interpretation and displaying of data onto a map, including the interface</li>
                <li>This side project contained 3000+ lines of code utilizing Python, HTML, JavaScript, and CSS to source 
and manipulate data, interact with a Firebase database, and to display a frontend webpage</li>
                <a className="inline-block p-3" href="https://github.com/dpang1999/covid-tracker">
                    <img className="rounded-lg h-72 w-100" src="/covid-tracker.png" alt="A screenshot of covid-tracker.ca displaying covid cases around Ontario"/>
                </a>
            </Segment>
            <Segment title="Developer - WaveNotes - (2020)">
                <li>Worked with groupmates to develop a prototype note taking app in Swift</li>
                <li>The app would assist the user in taking notes during a presentation by recording 
                    audio and automatically pairing sections of written notes to the audio waveform </li>
                <li>The goal is to assist the user in returning to their notes after the presentation and reviewing and/or amending the notes</li>
                <div className="p-3">
                    <div className="aspect-video h-[288px] rounded-lg overflow-hidden">
                        <ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=kmJUv8NBITw"/>
                    </div>
                </div>
                
            </Segment>

        </main>
    )
}

export default Projects