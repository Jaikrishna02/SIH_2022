# Consensus of hourly visibility forecast for airports using NWP model and observations


![Current Version](https://img.shields.io/badge/version-v0.1-blue)
![GitHub contributors](https://img.shields.io/github/contributors/Narayanan5-code/SIH_2022)
![GitHub stars](https://img.shields.io/github/stars/Narayanan5-code/SIH_2022?style=social)
![GitHub forks](https://img.shields.io/github/forks/Narayanan5-code/SIH_2022?style=social)


Development of visibility forecast with elastic lead times using NWP model with DeepAR from past observation for the next 12/24 hours using DeepAR inside sagemaker studio and visualizing using AWS Quicksite with API service for clients for selected airports in the country.

This project aims to forecast the Visibility in the airports (or any parameter) against parameters like wind speed,wind direction,Humidity,Temperature,Dew point temperature.We have used Amazon Sagemaker as the environment for the project which has paved a way to make  our cloud based.

# Our Key Features 
* Cloud Based 
* Elastic lead times prection from 5 mins to one week 
* Decentralized system
* Multivarient Support 
* Multi Step predictions 
* Platform independant 
* Desktop and mobile support
* API Services 
* No code / Low code , orchestrated admin pannel 
* IOT support with API
* Simple Visuvalizations for the users 
* Fast predictions with AWS elastic services
* Real time data feed can be predicted dynamically 
* Extensive Database support for uploading real time data


## Table of Contents
- [Architecture](#Architecture)
	- [Dataset](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

Open and view the Project using the `.zip` file provided or at my [GitHub Repository](https://github.com/Narayanan5-code/SIH_2022)

The project is also hosted [here](https://ap-south-1.quicksight.aws.amazon.com/sn/accounts/757776451407/dashboards/a647f449-e6c2-4fcc-b7cb-ad6f2e968665?directory_alias=airport-visibility-prediction )


## Architecture 

![Architecture](https://github.com/Narayanan5-code/SIH_2022/blob/main/src/images/arch.png)

## Modules

### 1. Models 

#### A.) Autoregressive model (AR)
This project used AR model, which is Autoregressive model, is Autoregressive (AR) models are a subset of time series models, which can be used to predict future values based on previous observations. 
AR models use regression techniques and rely on autocorrelation in order to make accurate predictions.
Autoregressive model works best with data with short lead times

The performance of progressive predictions of timeseries predictions has been compared against vaerious models like cnnn, rnn ,lstm etc and has shown better accuracy.
#### B.) Sagemaker 
It provides an integrated Jupyter authoring notebook instance for easy access to your data sources for exploration and analysis.It also provides common machine learning algorithms that are optimized to run efficiently against extremely large data in a distributed environment. 
#### C.) SageMaker Studio
An integrated machine learning environment where you can build, train, deploy, and analyze your models all in the same application.

### 2. API

### 3. User Interface

<!-- ### Installation

All installation steps go here.

* Installing a particular tool
  * Steps to complete it
  
* Installing another tool -->


## Development

### Input:
1. Model simulated Temperature, Wind Speed, Wind Direction, Humidity
2. Observed visibility data (Met report) from selected Airport 

### Output:
1. Hourly visibility product for 12/24 hours(or for any lead time)
2. Format: Visibility in meters 
3. Platform: This project is platform independent.

For details about how everything has been implemented, refer the source 

## Running the App

Steps and commands for running the app are to be included here

## Authors

#### Lakshmi Narayanan R
* [GitHub](https://github.com/Narayanan5-code)
* [LinkedIn]

#### Magesh Sundar G
* [GitHub]()
* [LinkedIn]

#### Jaikrishna B
* [GitHub]
* [LinkedIn]

#### Mukund R S
* [GitHub]
* [LinkedIn]

#### Shri Harri Priya R
* [GitHub]
* [LinkedIn]

#### Manthra K S
* [GitHub]
* [LinkedIn]

You can also see the complete [list of contributors][contributors] who participated in this project.

## License

`DOTS` is open source software [licensed as MIT][license].


## Acknowledgments

* [AWS Sagemaker](https://github.com/aws/amazon-sagemaker-examples)
* [AWS QuickSight](https://docs.aws.amazon.com/quicksight/index.html)
* [DeepAR](https://docs.aws.amazon.com/sagemaker/latest/dg/deepar.html)
* [Tensorflow](https://www.tensorflow.org/learn)
