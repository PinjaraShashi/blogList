// Write your JS code here
import './index.css'

const BlogItem = (props) =>{
    const {blogDetails} = props
    cont {title,description,publishedDate} = blogDetails

    return(
        <li className = "blog-item-list">
            <div className = "title-date">
                <h1 className = "heading">{title}</h1>
                <p className = "description">{publishedDate}</p>
            </div>
            <p className = "description">{description}</p>
        </li>
    )
}

export default BlogItem