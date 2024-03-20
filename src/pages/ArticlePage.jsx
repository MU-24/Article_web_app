import React from 'react'
import { useParams } from 'react-router-dom';
import articles from './article-content';
const ArticlePage = () => {
    const {articleId} = useParams();
    const article = articles.find(article=> article.name === articleId);

  return (
    <div className='flex flex-col items-center mx-14 mt-32 h-screen'>

    <h1 className=' font-bold mb-8 text-2xl'>{article.title}</h1>
    {article.content.map(paragraph =>(
      <p>{paragraph}</p>
      ))}
    
      </div>

  )
}

export default ArticlePage