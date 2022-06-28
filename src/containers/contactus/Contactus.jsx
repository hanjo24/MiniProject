import React, { useEffect, useState } from 'react';
import './contactus.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';



const Contactus = () => {
  const retrieveContacts = localStorage.getItem('contactList') ? JSON.parse(localStorage.getItem('contactList')) : [];
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const [allContacts, setAllContacts] = useState(retrieveContacts);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      contact:contact,
      message:message,
    };
    setAllContacts([...allContacts, data]);
    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setMessage('');

    alert("Submitted!")
  } 

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(allContacts));
  }, [allContacts])
  

  return (
    <div id='contactus'>
        <div className='contactus-header'>
           <h1>Get in Touch</h1>
           <h3>Leave us your information and we can talk about your plans</h3>
        </div>
        <div className="App" id='contactus'> 
          <Grid>
            <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
              <CardContent> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                  Fill up the form and our team will get back to you within 24 hours.
              </Typography> 
                <form onSubmit={(event) => {handleSubmit(event)}}>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter first name" label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter last name" label="Last Name" variant="outlined"  value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter number" label="Number" variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)}fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" value={message} onChange={(e) => setMessage(e.target.value)}fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    </Grid>

                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
    </div>
  );
}

export default Contactus;