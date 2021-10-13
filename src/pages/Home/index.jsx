import './styles.css';
import { useEffect, useState, useCallback } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-post';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [postsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const initialPosts = await loadPosts();
    setPosts(initialPosts.slice(page, postsPerPage))
    setAllPosts(initialPosts);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  }


  return (
    <section className="container">
      <div className="searchTitle">
        {
          searchValue && <h1> Search: {searchValue} </h1>
        }

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>
      {
        filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )
      }
      {
        filteredPosts.length < 1 && (
          <h2>Não existem posts</h2>
        )
      }

      <div class="button-container">
        {
          !searchValue && (
            <Button
              text="Load"
              onClick={loadMorePosts}
              disabled={noMorePosts}
            />
          )
        }

      </div>
    </section>
  );
}



export default Home;
