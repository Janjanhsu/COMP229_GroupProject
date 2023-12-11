import { useState, useEffect } from 'react';
import Congrats from '../../assets/gif/Congrats.gif';
//import { read} from "../user/api-user.js";
import { Navigate } from "react-router-dom";
import auth from "../../../lib/auth-helper.js";
import { useParams } from "react-router-dom";

const ShowAnswer = (props) => {
    /*
    const { userId } = useParams();
    const [values, setValues] = useState({
        quiz_scores: [],
        redirectToProfile: false,
        error: ""
    });
    */
    const correctTotal = props.correctTotal;
    //const jwt = auth.isAuthenticated();
    /*
    const handleAdd = () => {
        
        const user = {
            userId: userId,
            quiz_scores: [correctTotal]
        }
        console.log(user);
        updateScore(
            {
                userId: userId
            },
            {
                t: jwt.token,
            },
            user
        ).then((data) => {
            if (data && data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    quiz_scores: [correctTotal],
                    redirectToProfile: true
                })
            }   
        });
            <Navigate to="/" />;
    }
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


/*
<button className="flip-card-botton" onClick={<Navigate to="/" />}>Confirm</button>
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        read(
          {
            userId: userId,
          },
          { t: jwt.token },
          signal
        ).then((data) => {
          if (data && data.error) {
            setValues({ ...values, error: data.error });
          } else {
            setValues({ ...values, quiz_scores: data.quiz_scores});
          }
        });
        return function cleanup() {
          abortController.abort();
        };
      }, [userId]);
    console.log(values)
    */