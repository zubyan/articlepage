import { useContext, useState } from 'react';
import { AuthContext } from '../store/auth-context';

function CreateArticlePage() {
  const { user, setUser } = useContext(AuthContext);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();
  const [tagList, setTagList] = useState();

  async function publishArticle() {
    let article = { title, description, body, tagList };
    console.log(article);
    await fetch('https://api.realworld.io/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${user.token}`,
      },
      body: JSON.stringify({ article }),
    });
  }
  // console.log(user.token);
  return (
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <ul class="error-messages">
              <li>That title is required</li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                publishArticle();
              }}
            >
              <fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Article Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="What's this article about?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter tags"
                    value={tagList}
                    onChange={(e) => setTagList(e.target.value)}
                  />
                  <div class="tag-list">
                    <span class="tag-default tag-pill">
                      {' '}
                      <i class="ion-close-round"></i> tag{' '}
                    </span>
                  </div>
                </fieldset>
                <button
                  class="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateArticlePage;
