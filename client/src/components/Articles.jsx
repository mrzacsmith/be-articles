import React from 'react'
import styled from 'styled-components'

const Articles = ({ posts }) => {
  return (
    <ArticleContainer>
      {posts.map((article, key) => (
        <div className="container">
          <h2>{article.title} by </h2>
          <p>{article.article}</p>
          <span className="badge badge-secondary p-2">
            {article.authorname}
          </span>
          <div className="row my-5">
            <div className="col-sm-2">
              <a href="" className="btn btn-outline-success">
                Edit
              </a>
            </div>
            <div className="col-sm-2">
              <a href="" className="btn btn-outline-danger">
                Delete
              </a>
            </div>
          </div>
        </div>
      ))}
    </ArticleContainer>
  )
}

export default Articles

const ArticleContainer = styled.div`
  margin: 5rem 0;
  text-align: left;
`
