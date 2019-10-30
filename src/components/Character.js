import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Character = ({ img, name, species }) => (
  <dl>
    <dt>img</dt>
    <dd><img src={img}></img></dd>

    <dt>Name</dt>
    <dd>{name}</dd>

    <dt>Species</dt>
    <dd>{species}</dd>
  </dl>
);

Character.propType = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
