import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import './components/Header.css';
import ButtonDwonload from './components/ButtonDwonload';
import ButtonUpload from './components/ButtonUpload';

const PUBLIC_URL = 'https://xlsx-to-json.herokuapp.com/xlsx/convert';
const LOCAL_URL = 'http://localhost:8083/xlsx/convert';

const urlConvert =
  process.env.NODE_ENV === 'development' ? LOCAL_URL : PUBLIC_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      url: '',
      targetInput: '',
    };

    this.handleChangeFiles = this.handleChangeFiles.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleChangeFiles(e) {
    this.setState({
      files: Array.from(e.target.files),
      targetInput: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    this.state.files.map(file => formData.append('avatar', file, file.name));

    const FETCH_PARAM = {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json, */*',
        // 'Access-Control-Allow-Credentials': true,
      },
      mode: 'cors',
      body: formData,
    };

    fetch(urlConvert, FETCH_PARAM)
      .then(response => {
        return response.blob();
      })
      .then(data => {
        const url = window.URL.createObjectURL(data);
        this.setState({
          url,
        });
      });
  }

  handleDownload(e) {
    this.reset();
  }

  reset() {
    this.setState({
      files: [],
      url: '',
      targetInput: '',
    });
  }

  render() {
    const { files, url, targetInput } = this.state;

    return (
      <div className="App">
        <Header />

        <form
          className="App_form"
          encType="multipart/form-data"
          noValidate
          onSubmit={this.handleSubmit}
          accept="/src/*"
        >
          <div className="App_label">
            <label>
              Select Files:
              <input
                multiple
                type="file"
                onChange={this.handleChangeFiles}
                value={targetInput}
              />
            </label>
          </div>

          {files.length > 0 && url.length < 1 && <ButtonUpload />}
          {files.length > 0 &&
            url.length > 0 && (
              <ButtonDwonload
                url={url}
                state={this.state}
                handleDownload={this.handleDownload.bind(this)}
              />
            )}
        </form>
      </div>
    );
  }
}

export default App;
