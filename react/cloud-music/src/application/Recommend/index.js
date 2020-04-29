import React from 'react';
import {} from './style.js';

function Recommend(props){
  const { route } = props;
  console.log(props)
  return (
    <div>
      Recommend
    </div>
  );
}
 
export default React.memo(Recommend);