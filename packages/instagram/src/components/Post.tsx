import './Post.css'

export const Post = () => {
  return (
    <div className="post">
      <h3>User name</h3>
      {/*header*/}
      <img className="post_img" src="https://www.yuta-u.com/wp-content/uploads/2017/08/react-1-768x768.jpg" />

      {/*image*/}

      <h4 className="post_text">
        <strong>Username</strong>: caption
      </h4>
    </div>
  )
}
