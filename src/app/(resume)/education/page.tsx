import Segment from "@dpang1999/resume/app/_components/Segment"

const Education = () => {
    return (
        <main className="text-white">
            <h1 className="text-3xl">Education</h1>
            <Segment title="Univeristy of Waterloo - MMath in Computer Science - (May 2024 - Present)">
                <li>Currently researching the performance of generics in various languages </li>
                <li>Analyzed and presented research papers on programming languages topics and software evolutionn</li>
                <li>Usage of MATLAB around Linear Algebra topics (e.x. iteratie methods, matrix decomoposition, etc.) </li>
                <li>Wrote a short research project on preconditioning for iterative methods in linear algebra </li>
                <li>Delivered a project on manipulating Typescript AST to refactor bad patterns in React code </li>
                
            </Segment>
            <Segment title="University of Toronto - Certificate of Cloud Computing & Certificate of DevOps - (2023)">
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
