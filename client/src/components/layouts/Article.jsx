import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Article = (props) => {
  const [title, setTitle] = useState('')
  const [authorname, setAuthorname] = useState('')
  const [article, setArticle] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:5775/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorname(res.data.authorname),
      ])
      .catch((err) => console.log(err))
  }, [props])

  return (
    <div>
      <h2>{title}</h2>
      <p>{article}</p>
    </div>
  )
}

export default Article
