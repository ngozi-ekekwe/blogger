import React from 'react';
import Card from './Card';

const CardListing = ({stories}) => {
  return (
    <div className="row card-listing">
      { stories && stories.map((story) => {
        return <Card  userId={story.userId} title={story.title} content={story.content} slug={story.slug}/>
      })}
    </div>
  );
};

export default CardListing;