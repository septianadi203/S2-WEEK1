import Navigate from '../components/Navbar';
// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp';
import Filter from '../components/Filter';
import Content from '../components/Content';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
// import Col from 'react-bootstrap/Col';

function home () {
  return (
    // <SignUp />
    <div>
      <Navigate />
      <div className='mx-4'>
         <Row>
         <Filter />
         <Content 
         className=""/>
         </Row>
      </div>
    </div>
    // <Row><Filter /></Row>
  );
}

export default home;