import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../components/PostListItem';
import { getAllArticles, fetchArticles } from '../store/articlesSlice';

const Home = () => {
    // const dataLoaded = useRef(false);
    const dispatch = useDispatch();
    const { entities, status } = useSelector(getAllArticles);
    // const [articles, setArticles] = useState([]);

    useEffect(() => {
        // if (dataLoaded.current) {
        //     return;
        // }
        // dataLoaded.current = true;

        if (status === 'idle') {
            dispatch(fetchArticles);
        }
        // .then(response => response.json())
        // .then(json => setArticles(json.data));
    }, []);

    if (status === 'loading') {
        return <h2>Загрузка</h2>;
    }

    return (
        <div className="row mt-4">
            <div className="col-md-8">
                {entities.map(article =>
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