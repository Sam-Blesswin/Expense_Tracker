// Reusable wrapper component
// To extract common css

/**
 * props.childen: is used in a custom wrapper componentto render any child elements
 * or content that are passed as children to the Card component.
 *
 * props.className: Users of the Card component can provide their own CSS classes by passing the className prop.
 */

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
