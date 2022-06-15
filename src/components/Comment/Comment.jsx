import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [ likeCount, setLikeCount ] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/Tharlys10.png"
        hasBorder={false}
        alt="" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tharlys Alves <span>(Você)</span></strong>
              <time title="04 de Junho de 2022 às 22:00" dateTime="2022-06-04T22:00:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{ content }</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{ likeCount }</span>
          </button>
        </footer>
      </div>
    </div>
  );
}