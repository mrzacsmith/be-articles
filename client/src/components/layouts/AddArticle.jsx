import React from 'react'

const AddArticle = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="authorname">Author Name</label>
        <input type="text" className="form-control" placeholder="author name" />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="article">Article</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default AddArticle
