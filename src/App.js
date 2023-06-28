import { Route, Routes, Link} from 'react-router-dom';
import MainNavigation from './Components/Navigation/MainNavigation';
import Container from "./Components/Container/Container"
import EditBirthdays from './Pages/EditBirthdaysPage/EditBirthdaysPage';
import AllBirthdays from './Pages/AllBirthdaysPage/AllBirthdaysPage';
import HomePage from './Pages/HomePage/HomePage';
import ThisMontPage from './Pages/ThisMonthPage/ThisMonthPage';


function App() {
  return (
    <div className="App">
      <Container>
        <MainNavigation></MainNavigation>   
      </Container>
      
      <Routes> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/all-birthdays' element={<AllBirthdays/>} />
        <Route path='/this-month' element={<ThisMontPage/>} />
        <Route path='/edit-birthdays' element={<EditBirthdays/>} />
       
        <Route path='*' element={
          <div>
            <h2>Page not found</h2>       
            <Link to='/'>Back to home page</Link>
          </div>
        }/>
      </Routes>

    </div>
  );
}

export default App;
