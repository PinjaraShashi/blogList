// Write your JS code here
import BlogItem from './components/BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(blogDetails => (
        <BlogItem key={blogDetails.id} blogDetails={blogDetails} />
      ))}
    </ul>
  )
}

export default BlogList
