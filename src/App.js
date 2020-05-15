import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import covidImg from "./images/covid.jpg";

class App extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const getData = await fetchData();
        this.setState({ data: getData })
    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        // console.log(fetchedData, country);
        
        this.setState({ data: fetchedData, country: country }); 
    }

    render() {

        const { data, country } = this.state; 

        return (
            <div className={styles.container}>
                <img className={styles.image} src={covidImg} alt="COVID-19"/>   
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
