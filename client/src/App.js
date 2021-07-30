import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';//download or gennerate pdf
import logo2 from './logo2.png'
import './App.css';
import Footer from './Footer';
class App extends Component {
  state = {
    date: '',
    rname:'',
    raddress:'',
    sname:'',
    saddress: '',
  }
//blob are immutable data that are use row data
  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="App">
       <div className="Navbar">
         <div className="header1">
              <img src={logo2}  alt="img" style={{width:"60px" ,height:"60px"}}/>
         </div>
         <div className="header2">
           <p> Wascrop, We 're the <span style={{textDecoration:"underline", fontWeight:"bold"}}>Gamebred</span></p>
         </div>
         <div className="header3">
           <button style={{borderRadius:"10px",padding:"12px" , paddingLeft:'30px',paddingRight:'30px'}}>Contact us</button>
         </div>
       </div>
      <div className="textarea">
      <h4>/ Invoice generator</h4>
      <h2>Enter your Invoice</h2>
        <p>This Invoice is due on <input type="text" className="textfield"  name="date" onChange={this.handleChange}/>
        and being sent sent to <input type="text" className="textfield"  name="rname" onChange={this.handleChange} />
        whose address is<input type="text" className="textfield"  name="raddress" onChange={this.handleChange} /><br/><br/><br/>
        sender of the invoice is<input type="text" className="textfield"  name="sname" onChange={this.handleChange} />
        who is  address is<input type="text" className="textfield"  name="saddress" onChange={this.handleChange}  />
        </p><br/><br/>
        <input type="checkbox" name="vehicle1"/> I here by accept all the condition<br/><br/>
        <button className="downlaodbutton" onClick={this.createAndDownloadPdf}>Generate Invoice</button>

        </div>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
