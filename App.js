import logo from './logo.svg';
import './App.css';
import NavBar  from './components/NavBar';
import {Route,Routes}from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import ForgetPass from './components/ForgetPass';
import {BookHotel}from './components/BookHotel';
import {BookaRestaurant}from './components/BookRestaurant';
import { NoVotel } from './Hotels/Novotel';
import {GouthamGrand} from './Hotels/GouthamGrand';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/forgetpass"element={<ForgetPass/>}/>
      <Route path="/bookhotel"element={<BookHotel/>}/>
      <Route path="/bookarestaurant"element={<BookaRestaurant/>}/>
      <Route path="/novotel" element ={<NoVotel/>}/>
      <Route path='/gouthamgrand' element={<GouthamGrand/>}/>
      </Routes>
    </div>
  );
}

export default App;
