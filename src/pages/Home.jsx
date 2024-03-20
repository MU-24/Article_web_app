import React from 'react'
import ArticlesListPage from './ArticleListPage'
import HeroPage from '../components/HeroSection'


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroPage />
      <ArticlesListPage />
    </div>
  );
}

export default Home