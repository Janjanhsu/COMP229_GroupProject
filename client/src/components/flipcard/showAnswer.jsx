import { useState, useEffect } from 'react';
import Congrats from '../../assets/gif/Congrats.gif';
import { update, updateScore } from "../user/api-user.js";
import auth from "../../../lib/auth-helper.js";
import { useParams } from "react-router-dom";

function ShowAnswer(props) {
    const [values, setValues] = useState({
        updatedScores: [],
        error: "",
        redirectToProfile: false,
    });
    const { userId } = useParams();
    const correctTotal = props.correctTotal;
    const jwt = auth.isAuthenticated();
    /*
    const handleAdd = (event) => {
        const user = {
            userId: userId
        };
        updateScore(
            {
                userId: userId
            },
            {
                t: jwt.token,
            },
            user
        ).then((data) => {
            updatedScores = [...quiz_scores, correctTotal];
            setValues({
                ...values,
                userId: data._id,
                quiz_scores: updatedScores,
                redirectToProfile: true 
            });

        });
        */
return (
    <>
        {correctTotal > 0 ? (
            <div>
                <img src={Congrats} className="Congrats" alt="Congrats" width="500" heigth="248" />
                <p><center>You got {correctTotal} correct!</center></p>
                
            </div>
        ) : (
            <p>Ready to start?</p>
        )
        }
    </>
);
}


export default ShowAnswer;

/* <button className="flip-card-botton" onClick={handleAdd}>Confirm</button> */