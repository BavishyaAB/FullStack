const Total = (props) => {
    console.log(props.total);
    return (
        <>
        <p>
            Number of exercises {props.total}
        </p>
        </>
    )
}

export default Total;