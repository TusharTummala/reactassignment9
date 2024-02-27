

import React from 'react';
import { Link } from 'react-router-dom';
import ReactComponent from './React';
import AngularComponent from './Angular';
import VueComponent from './Vue';

const Technology = () => (
  <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-deck">
          <div className="card border-0">
            <div className="card-body bg-primary text-white">
              <h5 className="card-title text-center">React</h5>
              <Link to="/technologies/react" className="stretched-link"><ReactComponent /></Link>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body bg-success text-white">
              <h5 className="card-title text-center">Angular</h5>
              <Link to="/technologies/angular" className="stretched-link"><AngularComponent /></Link>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body bg-info text-white">
              <h5 className="card-title text-center">Vue</h5>
              <Link to="/technologies/vue" className="stretched-link"><VueComponent /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Technology;
