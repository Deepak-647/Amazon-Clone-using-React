import './App.css'
 
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utlis/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchContainer from './components/SearchContainer';

const appRouter = createBrowserRouter([{
  path: '/',
  element : <Body/>,
  children :[{
    path:'/',
    element:<MainContainer/>
  },
{
  path:'watch',
  element:<WatchPage/>
},
{
  path:'results',
  element:<SearchContainer/>
   
}]
}])
function App() {
  return (
    <Provider store={store}>
    <div>
      
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
