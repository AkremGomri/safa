import React, {useEffect, useState} from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap';

export default function Form() {
  const [ obj, setObj ] = useState({}) 
  const [ resultat, setresultat ] = useState(null) 
  function predir(){
    const requestOptions = {
      method: 'Post',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
      },
        body: JSON.stringify(obj)
  };
  fetch('http://localhost:3000/api/prediction/', requestOptions)
  .then(response => response.json())
  .then(data => {
    setresultat(data)
  })
  .catch(err => alert("connection à la base échouée"));
  }

  // useEffect(()=>{
  //   setresultat(0);
  // })

  return (
      
    <div>
        <div className="card" style={{"width": 400, "opacity": 0.75}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='Mean PR' onChange={(e)=>setObj({...obj, val1: e.target.value})}/>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='Median PR' onChange={(e)=>setObj({...obj, val2:e.target.value})}/>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='SDRP RMSSD' onChange={(e)=>setObj({...obj, val3:e.target.value})}/>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='MEdian REL PR' onChange={(e)=>setObj({...obj, val4:e.target.value})}/>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='SDRR RMSSD REL PR' onChange={(e)=>setObj({...obj, val5:e.target.value})}/>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='VLF' onChange={(e)=>setObj({...obj, val6:e.target.value})}/>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='VLF RCT' onChange={(e)=>setObj({...obj, val7:e.target.value})}/>
                  </div>
                </li>
                {/* <li className="list-group-item">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                </li> */}

                <li className="list-group-item">
                  <div className="mb-3">
                  <button type="button" className="btn btn-outline-secondary" onClick={ predir }>make prediction</button>
                  { resultat!==null? 
                  <div>
                    votre condition ce caréctérise par: {(resultat === 0)? <span style={{ "color": "red" }}>l'interruption </span> :(resultat === 1)? <span style={{ "color": "red" }}>pas de stresse </span> : <span style={{ "color": "red" }}>stresse du temps </span>} 
                  </div>
                  : null}
                  </div>
                </li>
            </ul>
        </div>

{/* <div className="card" style={{"width": 500}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

{/* <div className="form-group bmd-form-group">
  <label className="bmd-label-static">Fist Name</label>
  <input type="text" className="form-control" placeholder="Your name here" />
</div> */}
    </div>
  )
}
