import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Register = () => {
    useTitle('Register')
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
  
    const {createUser, updateUserProfile, emailVerify, popUpSign} = useContext(AuthContext);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email  = form.email.value;
      const password = form.password.value

      createUser(email, password)
      .then(result => {
        const user = result.user;
        setSuccess(user)
        console.log(user);
        form.reset();
        handleUpdateProfile(name, photoURL);
        handleEmailVerify();
        alert("Please verify your email address")
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleUpdateProfile = (name, photoURL) => {
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


    const handleEmailVerify = () => {
        emailVerify()
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleGoogleSign = () => {
        popUpSign(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    const handleGithubSign = () => {
        popUpSign(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }


  return (
    <div>
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

    {/* Google and Github athentication  */}
    <div className="d-flex justify-content-center mt-3">
    <button onClick={handleGoogleSign} className="btn btn-outline-danger px-5 py-1 me-3"><h4><FaGoogle className="display2"></FaGoogle></h4></button>

    <button onClick={handleGithubSign} className="btn btn-outline-dark px-5 py-1"><h4>
    <FaGithub className="display2"></FaGithub></h4></button>
    </div>
    </div>
  );
};

export default Register;
