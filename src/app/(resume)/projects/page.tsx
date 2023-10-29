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

        </main>
    )
}

export default Projects