import React from 'react';
import EmojiCard from './EmojiCard';
import emojis from '../emojis';

export default function App() {
  return (
    <div className="container">
      <h1>
        <span>React: Props & Mapping Components for Emoji Dictionary</span>
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
