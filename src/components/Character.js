import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css'

// eslint-disable-next-line react/prop-types
const Character = ({ img, name, species }) => (
  <div className={styles.Character}>
    <dl>
      <dd><img src={img}></img></dd>

      <dt>Name: </dt>
      <dd>{name}</dd>

      <dt>Species: </dt>
      <dd>{species}</dd>
    </dl>
  </div>
);

Character.propType = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
