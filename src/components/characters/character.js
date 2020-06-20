import React, from 'react';


const Character = ({character}) => {

  if (!character){
    return "loading ..."
  }

  return (
    <Fragment>
    // <p>{character.name}</p>
    <p>Character stuff goes here</p>
    </Fragment>
  )

}
