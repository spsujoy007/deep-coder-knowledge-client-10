import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
  
    const {createUser, updateUserProfile} = useContext(AuthContext);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email  = form.email.value;
      const password = form.password.value
      console.log(name, photoURL, email, password)
      createUser(email, password)
      .then(result => {
        const user = result.user;
        setSuccess(user)
        console.log(user);
        form.reset();
        handleUpdateProfile(name, photoURL);
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleUpdateProfile = (name, photoURL)=>{
    const profile ={
        displayName: name,
        photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(()=>{

    })
    .catch(()=>{
        console.error(error);
    })
}



  return (
    <Form onSubmit={handleSubmit} className="px-5 mx-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your full name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter your name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo url</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter your photo url"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="create a new Password"
          required
        />
      </Form.Group>
      {success && <p className="text-success">Login successful</p>}
      <p className="text-danger">{error}</p>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
