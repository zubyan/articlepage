import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const { user, setUser } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function currentUserData() {
      const userApi = await fetch('https://api.realworld.io/api/user', {
        headers: {
          'Content-Type': 'application/json',
          charset: 'utf-8',
          Authorization: `Token ${user.token}`,
        },
      });
      const userAp = await userApi.json();
      setCurrentUser(userAp.user);
      console.log(userAp);
    }

    currentUserData();
  }, []);

  useEffect(() => {
    async function articleData() {
      const response = await fetch(
        `https://api.realworld.io/api/articles?author=${user.username}`
      );
      const res = await response.json();
      setData(res.articles);
      // console.log(res);
    }

    articleData();
  }, []);
  console.log(data);
  // if (data.author.username === 'M Zubyan') {
  //   console.log('Hi');
  // }
  // console.log(currentUser);
  // console.log(user.token);

  return (
    <div class="profile-page">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="user-img" />
              <h4>{currentUser.username}</h4>
              <p>{currentUser.bio}</p>
              <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-plus-round"></i>
                &nbsp; Follow {currentUser.username}
              </button>
              <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-gear-a"></i>
                &nbsp; Edit Profile Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link active" href="">
                    My Articles
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            {data.map((dataObj, index) => {
              return (
                <div class="article-preview">
                  <div class="article-meta">
                    <a href="/profile/eric-simons">
                      <img src={dataObj.author.image} />
                    </a>
                    <div class="info">
                      <a href="/profile/eric-simons" class="author">
                        {dataObj.author.username}
                      </a>
                      <span class="date">
                        {new Date(dataObj.createdAt).toDateString()}
                      </span>
                    </div>
                    <button class="btn btn-outline-primary btn-sm pull-xs-right">
                      <i class="ion-heart"></i> {dataObj.favoritesCount}
                    </button>
                  </div>
                  <Link to={`/article/${dataObj.slug}`} class="preview-link">
                    <h1>{dataObj.title}</h1>
                    <p>{dataObj.description}</p>
                    <span>Read more...</span>
                    <ul class="tag-list">
                      {dataObj.tagList.map((tag) => {
                        return (
                          <li class="tag-default tag-pill tag-outline">
                            {tag}
                          </li>
                        );
                      })}
                    </ul>
                  </Link>
                </div>
              );
            })}

            <div class="article-preview">
              <div class="article-meta">
                <a href="/profile/eric-simons">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div class="info">
                  <a href="/profile/eric-simons" class="author">
                    Eric Simons
                  </a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 29
                </button>
              </div>
              <a
                href="/article/how-to-buil-webapps-that-scale"
                class="preview-link"
              >
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul class="tag-list">
                  <li class="tag-default tag-pill tag-outline">realworld</li>
                  <li class="tag-default tag-pill tag-outline">
                    implementations
                  </li>
                </ul>
              </a>
            </div>

            <div class="article-preview">
              <div class="article-meta">
                <a href="/profile/albert-pai">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div class="info">
                  <a href="/profile/albert-pai" class="author">
                    Albert Pai
                  </a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 32
                </button>
              </div>
              <a href="/article/the-song-you" class="preview-link">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul class="tag-list">
                  <li class="tag-default tag-pill tag-outline">Music</li>
                  <li class="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>

            <ul class="pagination">
              <li class="page-item active">
                <a class="page-link" href="">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="">
                  2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
