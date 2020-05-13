import React from 'react';
import EmojiCard from './EmojiCard';
import emojis from '../emojis';

export default function App() {
  return (
    <div className="container">
      <h1>
        <span>REACT (Props & Mapping Components): Emoji Dictionary</span>
      </h1>

      <dl className="dictionary">
        {emojis.map((emoji) => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            description={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}
