import { useState, useEffect } from 'react';

function ShowAnswer(props) {
    const correctTotal = props.correctTotal;
    console.log(correctTotal);
    
    return (
        <>
            <p>Congrats! You got {correctTotal} correct!</p>
        </>
    );
}

export default ShowAnswer;