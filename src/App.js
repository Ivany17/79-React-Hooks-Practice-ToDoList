import './App.css';
import React, {useReducer, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomePage from './pages/HomePage';
import { UserContext, ThemeContext, AppContext } from './context';
import CONSTANTS from './constants';
import SignUpForm from 'components/forms/SignUpForm';
import Chat from 'components/Chat';
import NavMenu from 'components/NavMenu';
import reducer from 'appReducer';
import ToDoList from 'components/ToDoList';
const {THEMES, ACTIONS} = CONSTANTS;

function App(){
  const [user, setUser] = useState({
    id:1,
    name:'Ivan Yarem'
  });
  const themeArrState = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer, {
    isMenuOpen: false
  })
  const openMenu = () => dispatch({type: ACTIONS.MENU_OPEN})
  const closeMenu = () => dispatch({type: ACTIONS.MENU_CLOSE})
  return(
    <AppContext.Provider value={{state, closeMenu}}>
      <ThemeContext.Provider value={themeArrState}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <MenuOpenIcon onClick={openMenu} />
            <NavMenu />
            <button>switch theme</button>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/signup' element={<SignUpForm />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/todolist' element={<ToDoList />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </AppContext.Provider>

  );
}

export default App;