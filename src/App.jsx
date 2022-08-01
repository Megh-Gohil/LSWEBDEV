import './App.css'
import Navbar from './Navbar'

function Up(){
  return(
    <div id="upper">
      <h1>Welcome to PG,Banglore</h1>
    </div>
  )
}
function Facility(){
  return(
    <div id="facility">
      <img src="src/sports.jpg" alt="sports image"></img>
      <img src="src/musical-instruments.jpg" alt="musical-instruments image"></img>
      <img src="src/tech.jpg" alt="tech"></img>
    </div>
  )
}
function Review(){
  return(
    <div id="reviews">
      <h2>REVIEWS</h2>
      <p className='review'>The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable.</p>
      <p className='review'>I had a wonderful experience at the (HN). Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!</p>
      <p className='review'>The staff at this property are all great! They all go above and beyond to make your stay comfortable. Please (HN) give your staff awards!</p>
    </div>
  )
}
function Subscribe(){
  return(
    <div id="subscribe">
      <h4>Subscribe to our newsletter for more updates</h4>
      <label for="fname">Name:</label>
      <input type="text" id="fname" name="fname"></input><br></br>
      <label for="lname">Email:</label>
      <input type="text" id="fname" name="fname"></input><br></br>
      <label for="lname">Room No:</label>
      <input type="text" id="lname" name="lname"></input><br></br>
      <input type="submit" value="Submit"></input>
    </div>
  )
}
function App() {

  return (
    <div className="App">
      <div id="top">
        <Up />
        <Navbar />
      </div>
      <div id="bottom">
        <Facility />
        <Review />
        <Subscribe/>
      </div>
    </div>
  )
}

export default App
