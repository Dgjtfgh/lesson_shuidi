import React from 'react';
import {} from './style.js';

function Rank(props){
  const { route } = props;
  console.log(props)
  return (
    <div>
      Rank
    </div>
  );
}
 
export default React.memo(Rank);