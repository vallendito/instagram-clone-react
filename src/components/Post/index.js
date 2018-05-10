import React, {Component} from 'react';
import "./Post.css";

class Post extends Component {
    render() {
        return(
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/26166154_2196394963721039_3628423526159980024_n.jpg?_nc_cat=0&oh=2ced2fe9910ef75eaea964e8808f7a5b&oe=5B9B2BF9" alt="Chris" />
                        </div>
                        <div className="Post-user-nickname">
                            <span>Vallendito</span>
                        </div>
                    </div>
                </header>
            </article>
        );
    }
}
export default Post;