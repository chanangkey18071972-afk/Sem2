import './App.css'
import Header from './Header.jsx'
import Post from './Post'
import PostList from './PostList.jsx';

function App() {
  const posts = [
    {
      title: "My first Blog Post",
      author: "John Doe",
      content: "This is my first Blog Post!",
      comments: ["Great post!", "Thanks for sharing.", "You are the best"],
    },
    {
      title: "My second Blog Post",
      author: "John Doe",
      content: "This is my first Blog Post!",
      comments: ["Great post!", "Keep it up.", "You are the best"],
    }
  ];
  return(
    <div className='App'>
      <Header />
      <PostList posts={posts}/>
    </div>
  )
}

export default App
