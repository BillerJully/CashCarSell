import React, { useState, Component } from 'react'
import carData from '../mainform/jsondata/car-list.json'

class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBrand: '',
            availableModels: [],
            selectedModel: '', // Изначальное значение для выбора модели
        }
    }

    handleBrandChange = (event) => {
        const selectedBrand = event.target.value
        const selectedCar = carData.find((car) => car.brand === selectedBrand)
        const availableModels = selectedCar ? selectedCar.models : []
        this.setState({
            selectedBrand,
            availableModels,
            selectedModel: availableModels[0], // Выбираем первую модель из доступных
        })
    }

    handleModelChange = (event) => {
        const selectedModel = event.target.value
        this.setState({ selectedModel })
    }

    render() {
        return (
            <div>
                <label htmlFor="brand">Brand:</label>
                <select id="brand" onChange={this.handleBrandChange}>
                    <option value="">Select a brand</option>
                    {carData.map((car, index) => (
                        <option key={index} value={car.brand}>
                            {car.brand}
                        </option>
                    ))}
                </select>

                {this.state.availableModels.length > 0 && (
                    <div>
                        <label htmlFor="model">Model:</label>
                        <select
                            id="model"
                            value={this.state.selectedModel}
                            onChange={this.handleModelChange}
                        >
                            {this.state.availableModels.map((model, index) => (
                                <option key={index} value={model}>
                                    {model}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
        )
    }
}

export default NewForm
