import React, { Component } from 'react'
import * as api from '../../lib/api';
import './Temperature.css';

class Temperature extends Component {

    state = {
        loading: false,
        temperature: null,
        time: null
    }

    getAPI = async () => {

        if (this.state.loading) return;

        this.setState({
            loading: true
        });

        const response = await api.getAPI();

        const temperature = response.data.temp
        const time = response.data.time

        this.setState({
            temperature,
            time
          })
      
        this.setState({
            loading: false
        });
    }

    componentDidMount() {
        this.getAPI()
    }

    render() {

        const { temperature, time, loading } = this.state;

        if(loading) {
            return (
                <div id="content">
                    <p id="title">Hangang River Temperature</p>
                    <br />
                    <br />
                    <p id="subtitle">현재 한강물의 온도는</p>
                    <p id="temp">Loading...</p>
                    <br />
                    <br />
                    <p id="foo2">Loading...</p>
                </div>
            )
        } else {
            return (
                <div id="content">
                    <p id="title">Hangang River Temperature</p>
                    <br />
                    <br />
                    <p id="subtitle">현재 한강물의 온도는</p>
                    <p id="temp"><span role="img" aria-label="droplet">💧</span> {temperature}</p>
                    <br />
                    <br />
                    <p id="foo2">{time} 에 측정된 자료.</p>
                </div>
            )
        }
        
    }
}

export default Temperature;