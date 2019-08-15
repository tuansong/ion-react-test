import React, { Component } from "react";
import jsonData from '../JsonFiles/test1.json'
import './Test1.css';

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        columns: [],
        originalRows: [],
        rows: []
      },
      search: "",
      type: "",
      question: "",
      error: false,
      successfull: false
    };
  }

  componentDidMount() {
    const newData = {
        columns: [...jsonData.columns],
        originalRows: [...jsonData.rows],
        rows: []
    }
    this.setState({
        data: newData
    })
  }

  rows() {
    return this.state.data || []
  }

  render() {
    const columns = this.state.data.columns && this.state.data.columns.map( (col, index) => {
        return <th scope="col" key={col.field}>{col.label}</th>
    })

    return (
      <div className="table-wrap coltype" style={{ width: '50%'}}>
        <h4>Render a datatable using test1.json</h4>
        <p>Note: the amount of Column can be changed dynamically. </p>
        <input type="text" className="form-control m-0" />
        <table className="table ui-accordion">
          <caption />
          <colgroup>
            <col style={{ width: 10 }} />
            <col style={{ width: 50 }} />
            <col style={{ width: 30 }} />
          </colgroup>
          <thead>
            <tr>
              {columns}
            </tr>
          </thead>
          <tbody>
            <tr className="head">
              <td>NUMBER</td>
              <td>STRING</td>
              <td>TEXT</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
