import React from 'react'

const Articles = ({ posts }) => {
  return (
    <div>
      Welcome to the articles component
      {posts.map((article, key) => (
        <div>
          <h2>
            {article.title} by {article.authorname}
          </h2>
          <p>{article.article}</p>
        </div>
      ))}
    </div>
  )
}

export default Articles
