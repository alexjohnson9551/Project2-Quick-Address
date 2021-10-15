/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';
import { render } from 'react-dom';
// import styles from './HomeTable.module.scss';
import TableEntry from './TableEntry';

class HomeTable extends Component {
  
  constructor(props:any) {
    super(props);
  }
  render() {
    return ( 
      <div>
        <TableEntry/>
        <TableEntry/>
        <TableEntry/>
      </div>
    )
    }

};

export default HomeTable;
