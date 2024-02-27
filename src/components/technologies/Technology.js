// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import AngularComponent from './Angular';
// import ReactComponent from './React';
// import VueComponent from './Vue';

// const Technology = () => {
//   return (
//     <div className="container py-4">
//       <h2>Technologies</h2>
//       <div className="d-flex justify-content-around mb-3">
//         <button className="btn btn-primary" onClick={() => window.location.assign('/technologies/React')}>
//           React
//         </button>
//         <button className="btn btn-primary" onClick={() => window.location.assign('/technologies/Angular')}>
//           Angular
//         </button>
//         <button className="btn btn-primary" onClick={() => window.location.assign('/technologies/Vue')}>
//           Vue
//         </button>
//       </div>

//       <Routes>
//         <Route path="/technologies/React" element={<ReactComponent />} />
//         <Route path="/technologies/Angular" element={<AngularComponent />} />
//         <Route path="/technologies/Vue" element={<VueComponent />} />
//       </Routes>
//     </div>
//   );
// };

// export default Technology;


// Technology.js
import React from 'react';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <div className="container py-4">
      <h2>Technologies</h2>
      <div className="d-flex justify-content-around mb-3">
        <Link to="/technologies/react" className="btn btn-primary">
          React
        </Link>
        <Link to="/technologies/angular" className="btn btn-primary">
          Angular
        </Link>
        <Link to="/technologies/vue" className="btn btn-primary">
          Vue
        </Link>
      </div>
    </div>
  );
};

export default Technology;
