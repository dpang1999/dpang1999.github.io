import Segment from "@dpang1999/resume/components/Segment"

const Education = () => {
    return (
        <main className="text-white">
            <h1 className="text-3xl">Education</h1>
            <Segment title="University of Toronto - Certificate of Cloud Computing & Certificate of DevOps - (June 2023 - Present)">
                <li>Understanding of various challenges and implications when selecting cloud services and strategies</li>
                <li>Ensuring the privacy, compliance, and legal protection of proposed cloud solutions</li>
                <li>Learn various DevOps tools in theory and in practice (Git, Maven, Jenkins, Docker, Kubernetes, etc.)</li>
                <li>Understand DevOps Life Cycle of Software and the architecture behind it</li>
            </Segment>

            <Segment title="Queen's University - BCH in Software Design, 4.11/4.30 GPA - Class of 2022">
                <li>Working knowledge in Python, Java, HTML, CSS, JavaScript, Bash, Haskell, Prolog, C, C#, .NET, JSON</li>
                <li>Working knowledge in data structures, programming paradigms, software quality assurance, and 
computer and software architecture</li>
                <li>Built a mobile-friendly website using HTML, CSS, and JavaScript to meet changing requirements</li>
                <li> Applied eXtreme Programming, an agile software development framework to a course project</li>
                <li>Developed a prototype notetaking and audio recording app as a course project</li>
            </Segment>
        </main>
    )
}

export default Education