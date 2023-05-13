import  "../Style/Home.css" 


function Home() {
    return (
      <div className="home-container">
        <h3 className="home-title">Welcome to the Snack App!</h3>
        <img
          src="https://www.yummytoddlerfood.com/wp-content/uploads/2021/06/after-school-snacks-on-countertop.jpg"
          alt="Snack Art"
          className="home-image"
        />
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