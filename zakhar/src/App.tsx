import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import EntityList from './pages/EntityList';
import Settings from './pages/Settings';

const App: React.FC = () => {
	return (
	  <BrowserRouter>
		<div>
		  <div className='app-wrapper'>
			<div className='app-header'>
			  <Header/>
			</div>
			<div className='app-navigation'>
			  <Navigation/>
			</div>
			<div className='app-content'>
			  <Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/candidate' element={<EntityList entity_type="candiate"/>} />
				<Route path='/request' element={<EntityList entity_type="request"/>} />
				<Route path='/book' element={<EntityList entity_type="book"/>} />
				<Route path='/settings' element={<Settings/>} />
				<Route path='/login' element={<Login/>}/>
			  </Routes>
			</div>
		  </div>
		</div>
	  </BrowserRouter>
	);
  }
  
  export default App;
