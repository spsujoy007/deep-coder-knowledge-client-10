import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login")
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  
  
  const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email  = form.email.value;
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
            setSuccess(true)
            setError('')
            if(user.emailVerified){
              navigate(from, {replace: true});
            }
            else{
              alert('your email is not verified.please')
            }
        })
        .catch(error => setError(error))
    };

  return (
    <Form onSubmit={handleSubmit} className="px-5 mx-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <p className="text-success">{success}</p>
      <p className="text-danger">{error}</p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
