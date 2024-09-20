import Segment from "@dpang1999/resume/app/_components/Segment"

const Experience = () => {
    return (
        <main className="text-white">
            <h1 className="text-3xl">Experience</h1>
            <Segment title="Teaching Assistant - University of Waterloo - (May 2024 - Present)">
                <li>Responsible for markign and providing feedback on student assessments throughout the course</li>
                <li>Acted as a client to discuss software requriements on the student's group project, an SRS</li>
            </Segment>
            <Segment title="Tools and Data Developer Co-op – Ericsson – (Sept 2020 - Aug 2021)">
                <li>Performed a variety of different manual tests on software modules under development</li>
                <li>Designed, implemented, documented, and uplifted automated test cases for newly developed 5G 
technologies, including both new software and hardware</li>
                <li>Worked with project lead to change test case requirements as new and unexpected challenges 
arose during test case and software development</li>
                <li>Restructured and rewrote a OneNote notebook for the onboarding of new hires</li>
                <li>Assisted in the onboarding of new co-op students</li>
            </Segment>

            <Segment title="Teaching Assistant – Queen’s University – (Seasonal, 2018-2020)">
                <li>Responsible for office hours throughout the term to teach and assist students</li>
                <li>Proctoring and marking multiple tests as well as marking final exams</li>
                <li>Assisted for Discrete Mathematics, Logic for Computer Science, and Software Specifications</li>
            </Segment>
        </main>
    )
}

export default Experience