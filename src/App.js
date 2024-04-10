import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/categoryPage/Category';
import { Home } from './pages/homePage/Home';
import CreateProfile from './pages/profilePage/CreateProfile';
import Sign from './pages/signPage/Sign';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/private" element={<PrivateRoute />}>
          <Route path="" element={<CreateProfile />} />
          <Route path="category" element={<Category />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
