import React, { Component } from 'react'
import * as api from '../../lib/api';

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

        const { temperature, time } = this.state;

        return (
            <div>{temperature} / {time}</div>
        )
    }
}

export default Temperature;