import React from 'react';
import { Button } from 'react-bootstrap';

const Registration = (props: any) => (
  <div>
    Registration Component
    <br/>
    <Button onClick={() => props.nextPageHandler("Login")}>Back to Login</Button>
  </div>
);

export default Registration;
