import './App.css';
import Header from './Header';
import Layout from './Layout';
import Post from "./Post";
import { Routes, Route } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import Loginpage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContext, UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/Editpost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path='/edit/:id' element={<EditPost/>} />
      </Route>

    </Routes>
    </UserContextProvider>
  );
}

export default App;
