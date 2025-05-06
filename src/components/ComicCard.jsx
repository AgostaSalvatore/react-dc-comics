import React from 'react'

const ComicCard = ({ comic }) => {
  return (<div className="container card-container">
  <div className="prod-card">
    <a href="#"><img src={comic.thumb} alt={comic.title} /></a>
    <h3>{comic.title}</h3>
  </div>
</div>);
};

export default ComicCard