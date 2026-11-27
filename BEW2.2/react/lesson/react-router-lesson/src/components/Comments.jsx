import { useParams } from "react-router"

const Comments = () => {
    let { id } = useParams
    return (
        <div>
            <h2>Comments for Blog Post ID: {id}</h2>
            <p>Comments 1 for post id: {id}</p>
            <p>Comments 2 for post id: {id}</p>
        </div>
    )
}
export default Comments