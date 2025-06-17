import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function App() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/questions', newQuestion);
      setNewQuestion({ title: '', content: '' });
      fetchQuestions();
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>Questions App</Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={newQuestion.title}
          onChange={(e) => setNewQuestion({...newQuestion, title: e.target.value})}
        />
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={newQuestion.content}
          onChange={(e) => setNewQuestion({...newQuestion, content: e.target.value})}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Question
        </Button>
      </form>

      <List>
        {questions.map((question) => (
          <ListItem key={question.id}>
            <ListItemText
              primary={question.title}
              secondary={question.content}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;