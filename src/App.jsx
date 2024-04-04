import './App.css'
import AllCameras from './AllCameras'


function App() {
  return (
    <>
    <h2>Testing Page for webcam</h2>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AllCameras/>
        </div>
        <div className="col-md-6">
          <p>Sample text </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
