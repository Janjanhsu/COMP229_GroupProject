import { useState, useEffect } from 'react';

const PORT = 8081;

function ShowAnswer(props) {
    const [data, setData] = useState([]);
    const correctTotal = props.correctTotal;
    console.log(correctTotal);

    const fetchData = () => {
        fetch(`http://localhost:${PORT}/api/data`)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleAdd = (e) => {
        console.log(data)

        fetch(`http://localhost:${PORT}/api/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(() => {
                fetchData();
            })
            .catch(error => console.error('Error adding data:', error));
    };
    
    return (
        <>
            {correctTotal > 0 ? (
                <div>
                    <p>Congrats! You got {correctTotal} correct!</p>
                    <input
                        type="text"
                        placeholder="Name"
                        name="visitorUser"
                        value={data.name}
                        onChange={(e)=>setData({name: e.target.value, score: correctTotal})}
                    />
                    <button onClick={handleAdd}>submit</button>
                </div>
            ) : (
                <p>Ready to start?</p>
            )
            }
        </>
    );
}

export default ShowAnswer;