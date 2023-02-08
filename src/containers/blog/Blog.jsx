import React from 'react'
import "./blog.css"
import { Article } from '../../components'
import { Blog01, Blog02, Blog03, Blog04, Blog05} from "./index"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog" data-aos="fade-left" data-aos-delay="150"
    data-aos-duration="1000">
      <div className='gpt3__blog-heading'>
        <h1 className="gradient__text">A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article 
            imageURL={Blog01}
            date="Sept 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article 
            imageURL={Blog02}
            date="Sept 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
          <Article 
            imageURL={Blog03}
            date="Sept 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
          <Article 
            imageURL={Blog04}
            date="Sept 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
          <Article 
            imageURL={Blog05}
            date="Sept 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
