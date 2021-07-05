import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './view/Home'
import Header from './components/blog/Header'
import BooksList from './components/books/BooksList';
import { BooksProvider } from './context/BooksContext'


const App = () => {
  

    return (
      <>
      <Header />
      <BooksProvider>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/bookslist'  component={BooksList} />
      <Redirect from="/home" to="/" />
      </Switch>
      </BooksProvider>
      </>
        /*<AnimeList /><Home />*/
    );
  
}

export default App;