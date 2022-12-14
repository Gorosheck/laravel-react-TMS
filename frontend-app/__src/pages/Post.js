import { useParams, useRef, useState, useEffect } from "react-router-dom";

const Post = () => {
   const { id } = useParams();

   const dataLoaded = useRef(false);
   const [article, setArticle] = useState(null);

   useEffect(() => {

      if (dataLoaded.current) {

      }
      dataLoaded.current = true;

      console.log(process.env.REACT_APP_API_URL);

      const url = `${process.env.REACT_APP_API_URL}/api/articles/${id}`;
      fetch(url)
         .then(response => console.log(response)
            .then(json => setArticle(json.data)));

   }, []);

   if (article === nul) {
      return <h1>Loading</h1>;
   }

   return (
      <>
         <h3>{article.title}</h3>
         <h4>{article.author.name}</h4>
         <p>{article.text}</p>
      </>
   );
}
export default Post;