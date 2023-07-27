import PostList from "./Components/PostList"
import CreatePost from "./Components/createPost"
// import Postcard from "./Components/postcard"
import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <PostList />
        <CreatePost />
        {/* <Postcard /> */}
      </div>
    </>
  )
}

export default App
