import './App.css'
import { Post } from './components/Post'

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_header_img"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      <Post />
    </div>
  )
}

export default App

//object-fit contain
