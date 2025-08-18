const Total = (props) => {
    console.log(props);
    return (
        <>
        <p>
            <b>Total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
        </p>
        </>
    )
}

export default Total;