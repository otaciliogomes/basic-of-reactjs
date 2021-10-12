import './styles.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-post';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 5,
      searchValue: ''
    }

  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const initialPosts = await loadPosts();
    this.setState({
      posts: initialPosts.slice(page, postsPerPage),
      allPosts: initialPosts,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })

  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      })
      : posts;

    return (
      <section className="container">
        <div className="searchTitle">
          {
            searchValue && <h1> Search: {searchValue} </h1>
          }

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
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
                onClick={this.loadMorePosts}
                disabled={noMorePosts}
              />
            )
          }

        </div>
      </section>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
