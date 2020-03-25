import React, { Component } from 'react';
import more from 'assets/img/more.svg';
import {  Col, Form } from 'react-bootstrap';
import province from '../../../../data/province';
import city from '../../../../data/city';
import district from '../../../../data/district';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      isDisabledRegency: true,
      isDisabledDistrict: true,
      provinces: [],
      selectedProvince: '',
      regencies: [],
      selectedRegency: '',
      districts: [],
      selectedDistrict: '',
    };
  }

  componentDidMount = () => {
    this.setState({
      provinces:province
    });
  };


  getDropdownOptionId = value => value.split('-')[0];

  getDropdownOptionName = value => value.split('-')[1];

  setSelectedProvince = e => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: this.getDropdownOptionId(value),
        regencies: [],
        selectedRegency: '',
        districts: [],
        selectedDistrict: '',
        isDisabledRegency: false,
      },
      () => this.getRegencies()
    );
  };

  setSelectedRegency = e => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: this.getDropdownOptionId(value),
        districts: [],
        selectedDistrict: '',
        isDisabledDistrict: false,
      },
      () => this.getDistricts()
    );
  };

  getRegencies = () => {
    const { selectedProvince } = this.state;
    var i;
    let regency = [];

    for (i = 0; i < city.length; i++){
      if ( selectedProvince === city[i]['province_id'] ){
        regency.push(city[i]);
      }
    }
    this.setState({
      regencies: regency
    })
  
  };

  setSelectedDistrict = e => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: this.getDropdownOptionId(value),
      }
    );
  };

  getDistricts = () => {
    const { selectedRegency } = this.state;
    // ambil data distrct untuk regencies yg bersangkutan

    var i;
    let dist =[];

    for ( i=0; i<district.length; i++)
    {
      if (selectedRegency === district[i]['regency_id'])
      {
        dist.push(district[i]);
      }
    }
    this.setState({
      districts: dist
    })
  };

  mapToDropdownOptions = items => {
    return items.map(item => {
      return (
        <option value={`${item.id}-${item.name}`} key={item.id}>
          {item.name}
        </option>
      );
    });
  };


  render() { 
    const {  isDisabledRegency, isDisabledDistrict, provinces, selectedProvince, regencies, selectedRegency, districts, selectedDistrict } = this.state
    return (
      <div className="product-list">
        <div className="title">
          <p>SELECT PROVINCE OR CITY</p>
          <img src={more} className="more-icon" alt="more"/>
        </div>
        <div className="chart">

          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  as="select"
                  onChange={this.setSelectedProvince}
                  isValid={selectedProvince}
                  defaultValue="DEFAULT"
                  name="selectedProvince"
                >
                  <option value="DEFAULT">
                    {'Provinsi'}
                  </option>
                  {this.mapToDropdownOptions(provinces)}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  as="select"
                  onChange={this.setSelectedRegency}
                  isValid={!isDisabledRegency && selectedRegency}
                  disabled={isDisabledRegency}
                  defaultValue="DEFAULT"
                  name="selectedRegency"
                >
                  <option value="DEFAULT">
                    {isDisabledRegency ? selectedRegency : 'City'}
                  </option>
                  {this.mapToDropdownOptions(regencies)}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  as="select"
                  onChange={this.setSelectedDistrict}
                  isValid={!isDisabledDistrict && selectedDistrict}
                  disabled={isDisabledDistrict}
                  defaultValue="DEFAULT"
                  name="selectedDistrict"
                >
                  <option value="DEFAULT">
                    {isDisabledDistrict ? selectedDistrict : 'Kecamatan'}
                  </option>
                  {this.mapToDropdownOptions(districts)}
                </Form.Control>
              </Form.Group>
            </Form.Row>           
          </Form>
        </div>
      </div>
    );
  }
}

export default FormContainer