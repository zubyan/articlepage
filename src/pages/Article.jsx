import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticlePage() {
  const [data, setData] = useState();
  const param = useParams();
  useEffect(() => {
    async function articleData() {
      const response = await fetch(
        `https://api.realworld.io/api/articles/${param.slug}`
      );
      const res = await response.json();
      setData(res.article);
    }

    articleData();
  }, []);
  console.log(data, 'data');
  console.log(param, 'param hook');
  if (!data) {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
  return (
    <div class="article-page">
      <div class="banner">
        <div class="container">
          <h1>{data.title}</h1>

          <div class="article-meta">
            <a href="/profile/eric-simons">
              <img src={data.author.image} />
            </a>
            <div class="info">
              <a href="/profile/eric-simons" class="author">
                {data.author.username}
              </a>
              <span class="date">
                {new Date(data.createdAt).toDateString()}
              </span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow {data.author.username}{' '}
              {/* <span class="counter">(10)</span> */}
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Post{' '}
              <span class="counter">({data.favoritesCount})</span>
            </button>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-edit"></i> Edit Article
            </button>
            <button class="btn btn-sm btn-outline-danger">
              <i class="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div class="container page">
        <div class="row article-content">
          <div class="col-md-12">
            <p>{data.description}</p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>{data.body}</p>
            <ul class="tag-list">
              {data.tagList.map((tag) => {
                return <li class="tag-default tag-pill tag-outline">{tag}</li>;
              })}
            </ul>
          </div>
        </div>

        <hr />

        <div class="article-actions">
          <div class="article-meta">
            <a href="profile.html">
              <img src={data.author.image} />
            </a>
            <div class="info">
              <a href="" class="author">
                {data.author.username}
              </a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Article{' '}
              <span class="counter">({data.favoritesCount})</span>
            </button>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-edit"></i> Edit Article
            </button>
            <button class="btn btn-sm btn-outline-danger">
              <i class="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-8 offset-md-2">
            <form class="card comment-form">
              <div class="card-block">
                <textarea
                  class="form-control"
                  placeholder="Write a comment..."
                  rows="3"
                ></textarea>
              </div>
              <div class="card-footer">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
                <button class="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div class="card">
              <div class="card-block">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div class="card-footer">
                <a href="/profile/author" class="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    class="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" class="comment-author">
                  Jacob Schmidt
                </a>
                <span class="date-posted">Dec 29th</span>
              </div>
            </div>

            <div class="card">
              <div class="card-block">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div class="card-footer">
                <a href="/profile/author" class="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    class="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" class="comment-author">
                  Jacob Schmidt
                </a>
                <span class="date-posted">Dec 29th</span>
                <span class="mod-options">
                  <i class="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticlePage;
