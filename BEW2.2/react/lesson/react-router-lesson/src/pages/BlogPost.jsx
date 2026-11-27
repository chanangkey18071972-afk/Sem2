import { Link, Outlet, useNavigate, useParams } from "react-router"

const BlogPost = () => {
    let { id } = useParams()

    let navigate = useNavigate()

    const goBack = () => {
        navigate("/blog")
    }
    return (
        <div>
            <h1>Blog Post ID: {id}</h1>
            <p>This is the content for blog post ID: {id}</p>
            <Link to={`/Blog/${id}/comments`}>View Comments</Link>
            <Outlet/>
            <br />
            <button onClick={goBack}>
                Back to Blog
            </button>
        </div>
    )
}
export default BlogPost