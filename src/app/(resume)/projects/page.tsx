import Segment from "@dpang1999/resume/components/Segment"

const Projects = () => {
    return (
        <main className="text-white">
            <h1 className="text-3xl">Projects</h1>
            <Segment title="Developer – covid-tracker.ca – (2020)">
                <li>Worked with a small team to develop a website to display Covid-19 cases in Ontario over time
separated by public health units and case type</li>
                <li>Responsible for the interpretation and displaying of data onto a map, including the interface</li>
                <li>This side project contained 3000+ lines of code utilizing Python, HTML, JavaScript, and CSS to source 
and manipulate data, interact with a Firebase database, and to display a frontend webpage</li>
            </Segment>
            <Segment title="Developer - WaveNotes - (2020)">
                <li>Worked with groupmates to develop a prototype note taking app in Swift</li>
                <li>The app would assist the user in taking notes during a presentation by recording 
                    audio and automatically pairing sections of written notes to the audio waveform </li>
                <li>The goal is to assist the user in returning to their notes after the presentation and reviewing and/or amending the notes</li>
                
            </Segment>

        </main>
    )
}

export default Projects