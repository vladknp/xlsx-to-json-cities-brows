import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import "./components/Header.css";
import ButtonDwonload from './components/ButtonDwonload';
import ButtonUpload from './components/ButtonUpload';

const PUBLIC_URL = 'https://xlsx-to-json.herokuapp.com/xlsx/convert';
const LOCAL_URL = 'http://localhost:8083/xlsx/convert';

const urlConvert = process.env.NODE_ENV === 'development' ? LOCAL_URL : PUBLIC_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      response: [],
      url: '',
      uploadead: false      
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setState = this.setState.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData();

    Array.from(this.fileInput.files).map(file => formData.append('avatar', file, file.name))
    
    const FETCH_PARAM = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*',
      },
      mode: 'cors',
      body: formData,
    };

    fetch(urlConvert, FETCH_PARAM)
      .then(response => {
        return response.blob()
      })
      .then(data => {
        console.log(data)
        const url = window.URL.createObjectURL(data)
        this.setState({
          response: data,
          url,
          uploadead: true
        });
      })
  }

  handleDownload(e) {
    // e.preventDefault();
    console.log('test')

    this.setState({
      uploadead: false
    })
    console.log('test-2')
  }

  render() {
    const { url, uploadead } = this.state;
      
    return (
      <div className="App">
        <Header />

        <form className="App_form" encType="multipart/form-data" noValidate onSubmit={this.handleSubmit} accept="/src/*">
          <div className="App_label">
            <label>
              Upload file:

              <input
                multiple
                type="file"
                ref={input => this.fileInput = input} />
            </label>
          </div>

          {uploadead 
            ? <ButtonDwonload url={url} state={this.state} handleDownload={this.handleDownload.bind(this)} />
            : <ButtonUpload/>}
        </form>
      </div>
    );
  }
}

export default App;
