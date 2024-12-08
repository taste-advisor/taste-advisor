import React, { useState } from 'react';
import './CommentSection.scss';
import Link from 'next/link';
import { createComment } from '@/api/comments';

export const CommentSection = ({ comments, user, recipeId }) => {
  const [text, setText] = useState('');

  console.log(comments);
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      createComment(text, recipeId);
      setText('');
      window.location.reload();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="commentSection">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your comment here..."
          required
        />
        {user ? (
          <button type="submit">Submit Comment</button>
        ) : (
          <Link href="/login">
            <button>Sign in</button>
          </Link>
        )}
      </form>
      {comments.length !== 0 && (
        <div className="commentList">
          {comments.map(comment => (
            <div className="comment" key={comment.id}>
              <div className="userData">
                <img src={comment.author.avatarUrl} className="avatar" alt="" />
                <div className="userText">
                  <span className="username">{comment.author.username}</span>
                </div>
              </div>
              <p className="commentText">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
