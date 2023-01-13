import React from "react";

const Character = ({character}) => {
    return (
        <div className="character">
            <span>{character.name}</span>
            <span>{character.height}</span>
        </div>
    );
}

export default Character;