import  "../Style/Home.css" 
import Welcome from "../Components/Welcome.js"

function Home() {
    return (
      <div className="Snacks-App">
       < Welcome />
      </div>
      //  <><div className="Snacks-App" style={{ textAlign: 'center' }}></div><div className="Snacks-App">
      //     <h3> Welcome to the Snacks App!</h3>
      //     <img
      //       src="https://www.yummytoddlerfood.com/wp-content/uploads/2021/06/after-school-snacks-on-countertop.jpg"
      //       alt="Welcome"
      //       style={{ width: '50%', height: 'auto', marginTop: '20px' }} />
      //   </div></>
    );
  }
  
  export default Home;