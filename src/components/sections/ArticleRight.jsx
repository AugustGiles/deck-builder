import React from "react";

function ArticleRight(props) {
  return (
    <article className="article-right">
      <div className="article-content">{props.children}</div>
    </article>
  );
}

export default ArticleRight;
