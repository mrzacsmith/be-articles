import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Articles = ({ posts }) => {
  return (
    <ArticleContainer>
      {!posts.length ? (
        <h1 className="loading">Loading ... </h1>
      ) : (
        posts.map((article, key) => (
          <div className="container" key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">
              {article.authorname}
            </span>
            <div className="row my-5">
              <div className="col-sm-2">
                <Link to="/edit-article" className="btn btn-outline-success">
                  Edit
                </Link>
              </div>
              <div className="col-sm-2">
                <Link to="/" className="btn btn-outline-danger">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </ArticleContainer>
  )
}

export default Articles

const ArticleContainer = styled.div`
  margin: 5rem 0;
  text-align: left;
  .loading {
    color: red;
    text-align: center;
  }
`
