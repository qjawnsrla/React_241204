import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "http://google.com",
  urlToImage: "http://via.placeholder.com/160",
};

const NewsList = ({ category, onSelect }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = category === "all" ? "all" : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&${query}&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [category]); // [] 의존성 배열이 비어있으면 mount시점(즉, 컴포넌트 랜더링 이후)에 호출

  return (
    <>
      <NewsListBlock>
        {articles &&
          articles.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
      </NewsListBlock>
    </>
  );
};
export default NewsList;
