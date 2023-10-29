interface Props {
    title: string,
    children: React.ReactNode
}

const Segment = (props: Props) => {
    const {title, children} = props

    
    return (
        <>
            <h2 className="text-2xl py-2">{title}</h2>
            <ul className="list-disc pl-10">{children}</ul>
        </>
    ) 
}

export default Segment