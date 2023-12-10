// eslint-disable-next-line no-unused-vars
import Rank from '../../assets/gif/Ranking.gif';
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from "@material-ui/core/List";
import { list } from "../user/api-user.js";
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  image: {
    width: 500,
    height: 248
  },
  button: {
    padding: theme.spacing(1, 1, 1),
    color: theme.palette.protectedTitle
  }
}))

export default function Ranking() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setUsers(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const sortedUsersByScore = users.slice().sort((a, b) => {
    // Assuming highest_score is an array of numbers
    const maxScoreA = Math.max(...a.quiz_scores);
    const maxScoreB = Math.max(...b.quiz_scores);
    // Sorting in descending order of highest scores
    return maxScoreB - maxScoreA;
  });

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}
        image={Rank} title="Ranking" />
      <CardContent>
        <List dense>
          {sortedUsersByScore.map((item, i) => {
            return (
              <List key={i}>
                <ListItem>
                  <ListItemAvatar>
                    <span>{i + 1}</span>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={Math.max(...item.quiz_scores)} />
                </ListItem>
              </List>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}

/*
const Ranking = () => {

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    score: '',
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:${PORT}/api/data`)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  };
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    fetch(`http://localhost:${PORT}/api/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        setFormData({ name: '', score: '' });
        fetchData();
      })
      .catch(error => console.error('Error adding data:', error));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const selectedEntry = data.find((item) => item.id === id);
    setFormData(selectedEntry);
  };

  const handleUpdate = () => {
    fetch(`http://localhost:${PORT}/api/data/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        setFormData({ name: '', score: '' });
        setEditingId(null);
        fetchData();
      })
      .catch(error => console.error('Error updating data:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:${PORT}/api/data/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchData();
      })
      .catch(error => console.error('Error deleting data:', error));
  };

  return (
    <div className="ranking-app">
       <img src={Rank} className="Ranking" alt="Rank" width="500" heigth="248"/>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Score"
        name="score"
        value={formData.score}
        onChange={handleInputChange}
      />
      {editingId ? (
        <button className = "ranking-button" onClick={handleUpdate}>Update</button>
      ) : (
        <button className = "ranking-button" onClick={handleAdd}>Add</button>
      )}
      {data.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Score: {item.score}</p>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Ranking;

*/