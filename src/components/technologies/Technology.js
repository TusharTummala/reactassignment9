
// // // import React from 'react';
// // import { Link } from 'react-router-dom'; // Import Link component
// // import ReactComponent from './React'; // Import ReactComponent
// // import AngularComponent from './Angular'; // Import AngularComponent
// // import VueComponent from './Vue'; // Import VueComponent

// // // const Technology = () => (
// // //   <div className="card">
// // //     <div className="card-body">
// // //       <h5 className="card-title">Technologies</h5>
// // //       <p className="card-text">Explore different technologies.</p>

// // //       <ul className="navbar-nav ms-auto">
// // //         <li className="nav-item">
// // //           <Link className="btn btn-outline-light me-2" to="/technologies/react"> {<ReactComponent/>}
// // //             React
// // //           </Link>
// // //         </li>
// // //         <li className="nav-item">
// // //           <Link className="btn btn-outline-light me-2" to="/technologies/angular"> {<AngularComponent/>}
// // //             Angular
// // //           </Link>
// // //         </li>
// // //         <li className="nav-item">
// // //           <Link className="btn btn-outline-light" to="/technologies/vue"> {<VueComponent/>}
// // //             Vue
// // //           </Link>
// // //         </li>
// // //       </ul>
// // //     </div>
// // //   </div>
// // // );

// // // export default Technology;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import ReactComponent from './React';
// // import AngularComponent from './Angular';
// // import VueComponent from './Vue';

// // const Technology = () => (
// //   <div className="card border-primary mb-3">
// //     <div className="card-header bg-primary text-white">Technologies</div>
// //     <div className="card-body">
// //       <p className="card-text">Explore different technologies:</p>

// //       <div className="btn-group" role="group" aria-label="Technologies">
// //         <Link to="/technologies/react" className="btn btn-outline-primary me-2">
// //           <ReactComponent />
        
// //         </Link>
// //         <Link to="/technologies/angular" className="btn btn-outline-primary me-2">
// //           <AngularComponent />
         
// //         </Link>
// //         <Link to="/technologies/vue" className="btn btn-outline-primary">
// //           <VueComponent />
      
// //         </Link>
// //       </div>
// // //     </div>
// // //   </div>
// // );

// // export default Technology;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactComponent from './React';
// import AngularComponent from './Angular';
// import VueComponent from './Vue';

// const Technology = () => (
//   <div className="container mt-4">
//     <div className="row justify-content-center">
//       <div className="col-md-8">
//         <div className="card border-primary">
//           <div className="card-header bg-primary text-white text-center">
//             <h5 className="m-0">Explore Technologies</h5>
//           </div>
//           <div className="card-body">
//             <p className="card-text text-center">Explore different technologies:</p>
//             <div className="d-flex justify-content-center">
//               <div className="btn-group" role="group" aria-label="Technologies">
//                 <Link to="/technologies/react" className="btn btn-outline-primary me-2">
//                   <ReactComponent />
//                   <span className="ms-2"></span>
//                 </Link>
//                 <Link to="/technologies/angular" className="btn btn-outline-primary me-2">
//                   <AngularComponent />
//                   <span className="ms-2"></span>
//                 </Link>
//                 <Link to="/technologies/vue" className="btn btn-outline-primary">
//                   <VueComponent />
//                   <span className="ms-2"></span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Technology;


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
