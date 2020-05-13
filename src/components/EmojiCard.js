import React from 'react';

export default function EmojiCard(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}
