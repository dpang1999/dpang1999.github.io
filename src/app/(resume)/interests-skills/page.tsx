
import Segment from "@dpang1999/resume/app/_components/Segment"

const Interests = () => {
    return (
        <main className="text-white">
            <h1 className="text-3xl">Interests and Skills</h1>
            <Segment title="Scouts Canada – (2007-2017)">
                <li>Represented Scouts Canada in preparing, march with, and raise national flags for over 130 medal 
ceremonies over 2 weeks at the CIBC Athletics Stadium at the 2015 Pan Am and Parapan Am games</li>
                <li>Led a group of 7 Venturers on a 3-night outdoor camping excursion to demonstrate practical skills 
including shelter building, fire starting, cooking, and water collection</li>
            </Segment>

            <Segment title="Miscellaneous">
                <li>Played in an organized youth hockey league for 6 seasons</li>
                <li>Able to speak Cantonese</li>
                <li>Played Piano for 10+ years</li>
                <li>Can type at a rate of 100+ Words per Minute</li>
                <li>Developing a Discord bot using .NET 6</li>
            </Segment>

        </main>
    )
}

export default Interests