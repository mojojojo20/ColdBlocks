
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';

class NormalPackageList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      packageDestination:'',
      packageHolder:'',
      packageId:''
    }
  }
  componentDidMount() {
    // console.log("hi");
    var pHolder = localStorage.getItem('username')
    fetch('http://localhost:4000/api/ListPackagesByHolder?packageHolder='+pHolder)
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
      console.log(data);
    })
    .catch(console.log)
  }
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Package Details"
                category="Complete Package Details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Package ID</th>
                        <th>
                          Package Location
                        </th>
                        <th>
                          Package Holder
                        </th>
                        <th>
                          Package Temperature
                        </th>
                        <th>
                          Package Destination
                        </th>
                        <th>
                          Package Status
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.packageID}</td>
                            <td>{object.location}</td>
                            <td>{object.holder}</td>
                            <td>{object.temperature}</td>
                            <td>{object.destination}</td>
                            <td>{object.status}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NormalPackageList;