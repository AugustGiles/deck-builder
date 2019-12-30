import React from "react";

function Article(props) {
  return <article className={props.classes}>{props.children}</article>;
}

export default Article;
