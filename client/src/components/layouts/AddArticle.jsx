import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const AddArticle = () => {
  const [title, setTitle] = useState('')
  const [article, setArticle] = useState('')
  const [authorname, setAuthorname] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const articles = {
      title,
      article,
      authorname,
    }

    setTitle('')
    setArticle('')
    setAuthorname('')

    axios
      .post('http://localhost:5775/articles/add', articles)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log('Error: ' + err)
      })
  }

  return (
    <AddArticleContainer>
      <div className="container">
        <h2>Add a new article!</h2>
        <form onSubmit={onSubmitHandler} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="authorname">Author Name</label>
            <input
              type="text"
              value={authorname}
              onChange={(e) => setAuthorname(e.target.value)}
              className="form-control"
              placeholder="author name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="title"
              placeholder="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="form-control"
              rows="3"
              placeholder="enter your article here"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Post Article
          </button>
        </form>
      </div>
    </AddArticleContainer>
  )
}

export default AddArticle

const AddArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 40rem;

  h2 {
    font-weight: 900;
    color: var(--dark-green);
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }
`
