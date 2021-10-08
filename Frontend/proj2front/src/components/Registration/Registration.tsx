import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Registration.module.scss';

const Registration = (props: any) => (
  <div className={styles.Registration} data-testid="Registration">
    Registration Component
    <br/>
    <Button onClick={() => props.nextPageHandler("Login")}>Back to Login</Button>
  </div>
);

export default Registration;
