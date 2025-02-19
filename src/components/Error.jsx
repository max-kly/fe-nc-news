const Error = ({ err }) => {
    return (
        <div className="error">
            <h1>Ooops</h1>
            <p>{err.msg}</p>
        </div>
    )
}
export default Error