import React from "react";

function Article(props) {
  return (
    <article className="article">
      <div className="article-content">{props.children}</div>
    </article>
  );
}

export default Article;
