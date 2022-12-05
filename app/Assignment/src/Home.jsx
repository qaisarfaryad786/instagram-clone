import React, { useState } from "react";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Home.css";
import { Link } from "react-router-dom";


export function Home() {
  // let count = 1;
  const [country, setCountry] = useState('');
  // const [name, setName] = useState();
  const [countries, setCountries] = useState([]);
  // const [lang, setLang] = useState();

  function inputValue(value) {
    const inputValue = value.target.value;
    setCountry(inputValue);
    
  }

  const getApi = async () => {
   
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await res.json();
      const names = data[0];

      const countryObj = {
        id:Math.floor(Math.random() * 100),
        countryCommonName:names.name.common,
        countryOfficialName:names.name.official,
        countryLanguage:Object.values(names.languages),
      }
      setCountries([...countries,countryObj]);
      // console.log(countries);
      console.log(countryObj);
      
    } catch (error) {
      console.log("Something went wrong");
    }
  };

    // useEffect(()=>{
    //   getApi();
    // },[])

  return (
    <Container className="containter">
      <Row className="row-1">
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Country:</Form.Label>
            <Form.Control
              onChange={inputValue}
              type="text"
              placeholder="e.g Pakistan"
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Button onClick={getApi} className="button" variant="success">
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Common Name</th>
              <th>Official Name</th>
              <th>Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              countries.map((element,index)=>{
               
                return( 
                <tr>
                  <td>{index+1}</td>
                  <td>{element.countryCommonName}</td>
                  <td>{element.countryOfficialName}</td>
                  <td>{element.countryLanguage + ","}</td>
                  <td>
                    <Link to="/card">
                    <Button className="button" variant="danger">
                      View
                    </Button>
                    </Link>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
