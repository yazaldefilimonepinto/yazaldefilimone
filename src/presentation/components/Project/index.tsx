import React, { FunctionComponent } from 'react';
import { Card } from '../Card';

import styles from './styles.module.scss';

export const Project: FunctionComponent = () => {
  const [searchModal, SetSearchModal] = React.useState(false);
  const [questionModal, SetQuestionModal] = React.useState(false);
  const category = ['BackEnd', 'FrontEnd', 'FullStack', 'Mobile', 'Clean Arch'];
  function handlerSearchModal() {
    SetSearchModal(!searchModal);
  }
  function handlerQuestionModal() {
    SetQuestionModal(!questionModal);
  }

  return (
    <section className="section">
      <header className={styles.header}>
        <div className={styles.title_container}>
          <h2>Projects</h2>
          <div>
            <button onClick={() => handlerQuestionModal()}>
              <i className="ri-question-fill"></i>
            </button>
            <div
              className={questionModal ? `${styles.question} ${styles.showModalQues} ` : styles.question}
            >
              <p>
                Click on the projects to see more details about it. Also, there are filters to explore
                projects according to certain titles and technologies.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.search_container}>
          <div className={styles.input}>
            <i className="ri-search-line"></i>
            <input type="search" placeholder="Search project for title" />
          </div>
          <div className={styles.modal_container}>
            <button className={styles.button_search} onClick={() => handlerSearchModal()}>
              <i className="ri-settings-4-line"></i>
              Fillers
            </button>

            <div
              className={
                searchModal ? `${styles.modal_search} ${styles.showModal} ` : styles.modal_search
              }
            >
              <span>Category</span>
              <ul>
                {category.map((cate, key) => (
                  <li key={key}>
                    <i className="ri-check-fill"></i>
                    {cate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.project_container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
};
