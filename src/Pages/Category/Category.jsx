import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';
import UseTitle from '../../hooks/UseTitle';

const Category = () => {
  const {id} =useParams()
  const categoryNews = useLoaderData()
  return (
    <div>
      {id && <h5>This  Category News:{categoryNews.length}</h5>}
      {
        categoryNews.map(news=> <NewsCard
        key={news._id}
        news = {news}
        ></NewsCard>)
      }
    </div>
  );
};

export default Category;