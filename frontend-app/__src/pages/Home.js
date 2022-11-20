import { useEffect, useRef, useState } from "react";
import PostListItem from "../components/PostListItem";

const Home = () => {
   const dataLoaded = useRef(false);
   const [articles, setArticles] = useState([]);

   useEffect(() => {

      if (dataLoaded.current) {

      }
      dataLoaded.current = true;

      console.log(process.env.REACT_APP_API_URL);

      const url = `${process.env.REACT_APP_API_URL}/api/articles`;
      fetch(url)
         .then(response => console.log(response)
            .then(json => setArticles(json.data)));

   }, []);

   return (
      <div className="row mt-4">
         <div className="col-md-8">
            {articles.map(article =>
               <PostListItem
                  id={article.id}
                  key={article.id}
                  title={article.title}
                  author={article.author.name}
                  categories={article.categories} />)}
         </div>
      </div>
   );
};

export default Home;