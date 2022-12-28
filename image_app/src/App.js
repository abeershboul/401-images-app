
import './App.css';
import Parent from './Component/parent'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div style={{
                color: "white",
                backgroundColor: "RoyalBlue",
                padding: "20px",                 margin: "0px",

                 textAlign: 'center'
            }}>
               <h1 style={{color:'black'}}>Image Cards</h1>
                
                <h6>A website to render lovly image</h6>
            </div >
    
      <Router>
          <Routes>
            <Route 
              path="/"
              element={<Parent/>}
            >
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;