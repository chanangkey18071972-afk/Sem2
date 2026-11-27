import{ Link } from "react-router"

function Blog() {
const post = [
{ id: 1, title: "First Post" },
{ id: 2, title: "Second Post" },
{ id: 3, title: "Third Post" },
];
return (
    <div>
        <h1>Blog Page</h1>
        {post.map((post) => (
            <p key={post.id}>
                <Link to={`/Blog/${post.id}`}>{post.title}</Link>
            </p>
        )
    )}
    </div>
)
}
export default Blog;