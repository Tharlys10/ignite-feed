import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

export function Post({ author, published_at, content }) {
  const published_date_formatted = format(published_at, "dd 'de' LLLL 'de' yyyy 'às' HH:mm", {
    locale: ptBR,
  });

  const published_date_relative_to_now = formatDistanceToNow(published_at, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatar_url}
          />
          <div className={styles.authorInfo}>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </div>

        <time title={published_date_formatted} dateTime={published_at.toISOString()}>{ published_date_relative_to_now }</time>
      </header>

      <div className={styles.content}>
        {
          content.map((item) => {
            switch (item.type) {
              case 'paragraph':
                return <p key={item.id}>{ item.content }</p>;
              case 'link':
                return <p key={item.id}><a href={ item.content } target="_blank">{ item.content }</a></p>;
              default:
                return null;
            }
          })
        }
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário aqui..."
        />

        <footer>
          <button type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentLint}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}