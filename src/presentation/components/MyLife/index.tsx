import React, { FunctionComponent } from 'react';
import inhambane from '@/shared/assets/images/inhambane.jpg';
import maputo from '@/shared/assets/images/maputo1.webp';
import inazuma from '@/shared/assets/images/inazuma.jpg';

import styles from './styles.module.scss';

export const MyLife: FunctionComponent = () => {
  return (
    <section className="section">
      <div className={styles.container}>
        <h2 className="title">
          About my life <i className="ri-shield-user-line"></i>
        </h2>
        <p>
          I was born in{' '}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/Mo%C3%A7ambique">
            Mozambique
          </a>{' '}
          in the province of{' '}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/Inhambane">
            Inhambane
          </a>
          , in a small village called Salela , without electricity, drinking water and much less
          internet, I even remember that at the end of the year we ran after the cars that tourists
          brought.
        </p>
        <p>
          One day my brother arrived with a Brazilian tourist from work{' '}
          <a target="_blank" href="https://www.youtube.com/channel/UCsA_TjiO3qSDwamjnmvyZTQ">
            Rodrigo Facundes
          </a>{' '}
          it was not very difficult to understand the language he spoke, he also spoke the same language
          a little differently but it was Portuguese, compared to many other tourists who spoke English
          or Japanese. I remember that he had more knowledge of technology and was already using it, he
          spent a few days there and learned from an agent (the culture) and I still remember the first
          English word I learned "potato". The days went by so fast and he had to go. If you want you can
          read more about the story{' '}
          <a target="_blank" href="https://maninganice.blogspot.com/2013/01/a-casa-do-samito.html">
            here
          </a>
          , I'll watch the{' '}
          <a target="_blank" href="https://youtu.be/PTGyO0wVYjE">
            video
          </a>
        </p>
        <p>
          After a few years my mother lost her life and at the time the family was supported by her wife.
          My mother's sister (my aunt) took me to her house in Inhambane, the capital. Where there is
          technology Cell phones and cars passed by all the time. And I live there before today.
        </p>
      </div>
      <div className={styles.image}>
        <img src={inhambane} alt="" />
        <div>
          <span>Inhambane Ceu</span>
        </div>
      </div>
      <div className={styles.image}>
        <img src={maputo} alt="" />
        <div>
          <span>Capital de Maputo</span>
        </div>
      </div>

      <div className={styles.container}>
        <h2 className="title">
          Hobbies <i className="ri-sun-foggy-line"></i> <i className="ri-headphone-line"></i>
        </h2>
        <p>
          Well my childhood didn't have much technology the first ball I played was with Rodrigo Facunds
          it was quite a ball, it was not very common to see a ball like that. But after I moved to the
          capital I started watching Inazuma Eleven anime and some video games, but I never liked games.
          and I started to read books by Romace and fixation such as "A Culpa e Das Estrelas", "Todo
          dia", "Casa de Papel" among others. Today I am a big fan of author{' '}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/John_Green">
            John Green
          </a>
          . And to this day I read books and I'm a big fan of anime and cosplays
        </p>
        <div className={styles.image}>
          <img src={inazuma} alt="" />
          <div>
            <span>Inazuma Eleven</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2 className="title">
          Programming Journey <i className="ri-macbook-line"></i>{' '}
          <i className="ri-code-s-slash-fill"></i>
        </h2>
        <p>
          As soon as i arrived in the capital "Inhamabene ceu" i saw many people cars many cars and the
          lights loud music was amazing. I've been playing with the TV for 1.2 years, etc. But the cell
          phone and the internet was still my objection and i couldn't stop thinking how this is
          possible. but around 2pm to 3pm I get my first cell phone, which was fantastic and even better
          was mine, and it's as if the TV and the speakers that played the music were all in my hand.
          after a few months I started using the social networks Facebook and Whatsapp, but I didn't like
          Facebook very much a lot, a lot of people. so one day i saw a "terminal" that was termux a
          linux terminal emulator for android and it was very colorful like in the hacker movies so I
          talked to the person who posted the statuses and oh yes my questions started getting answers.
        </p>
        <p>
          I started studying hacking and learning python but a lot of things happened and I had to stop
          and choose something more "Normal" so start and see about javascript and web development then I
          saw that it was what I wanted for my life the pain of having played putting away learning that
          I had disappeared before. I dedicated myself and one of my biggest motivations was to prove to
          my family that I can live on it and that my dream of being a programmer was relevant. two years
          passed i studied day and night using a big cell phone sangung PRIME it was very difficult but
          it never stopped being fun at the time i used neovim in termux. One week decides to recreate
          the Facebook API using nodejs typescript and clean architecture and decides to make a post on
          linkin I just thought it was just another post. the next day avia received many messages
          praising me. After 2-3 days, Guilherme Messias de Oliveira called me in chat to make a donation
          so that I could buy a notebook just hearing this already gave me a lot of motivation to
          continue because it had been a long time and the family did not accept my studies they were
          exhausting. days later Marcos Taira came to me too and opened a crowdfunding for me and in a
          few days the total amount was already there. The most motivating thing for me was that Rodrigo
          Maguinho gave me two of their courses on udemy. And today I work with programming my dream
          finally came true the pain of studying went away just today and only smile on my face and that
          of my family.
        </p>
      </div>
    </section>
  );
};
