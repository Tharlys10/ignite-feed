import { Header } from './components/Header/Header';

import './global.css';
import styles from './App.module.css';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';

const posts = [
  {
    id: 1,
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        id: 2,
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        id: 3,
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    published_at: new Date('2022-06-04T22:00:00'),
    author: {
      id: 1,
      name: 'Tharlys Alves',
      avatar_url: 'https://github.com/Tharlys10.png',
      role: 'Developer Full Stack',
    }
  },
  {
    id: 2,
    content: [
      {
        id: 4,
        type: 'paragraph',
        content: 'Hey, there! 👋'
      },
      {
        id: 5,
        type: 'paragraph',
        content: 'Gostaria de compartilhar com vocês esse projetinho de estudo bem massa que estou desenvolvendo utilizando o NodeJS com Nest, GraphQL e Postgres, afim de aprimorar minhas habilidades com essas tecnologias, além de utilizar os conceitos do SOLID, TDD e DDD.'
      },
      {
        id: 6,
        type: 'paragraph',
        content: 'Ainda está em construção, mas está ficando bem legal. Vão lá dar uma olhadinha e deixar aquela star!'
      },
      {
        id: 7,
        type: 'paragraph',
        content: 'Segue o link:'
      },
      {
        id: 8,
        type: 'link',
        content: 'https://github.com/GiovannyLucas/classes-scheduler-graphql'
      },
    ],
    published_at: new Date('2022-06-07T10:56:12'),
    author: {
      id: 2,
      name: 'Giovanny Lucas',
      avatar_url: 'https://github.com/GiovannyLucas.png',
      role: 'Developer Back-End',
    }
  }
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                published_at={post.published_at}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}
