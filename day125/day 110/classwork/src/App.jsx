import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import books from './pages/books'
import Navbar from './components/navbar'
import Footer from './components/footer'
import BooksNew from './pages/BooksNew'
import BooksModules from './pages/BooksModules'
import BookIds from './pages/BookIds'
import Testpage from './pages/testpage'
import Testpageid from './pages/testpageid'

function App() {

  return (
    <div>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/books' element={ <books /> }/>
        <Route path='/books/new' element={ <BooksNew /> } />
        <Route path='/books/new/pages' element={ <BooksNew /> }/>
        <Route path='/books/modules' element={ <BooksModules /> }/>
        <Route path='*' element={ <h1>page not found error 404</h1> } />
        
        <Route path='/books/:id' element={ <BookIds /> }/>
        <Route path='/testpage' element={ <Testpage /> }>
          <Route path=':id' element={ <Testpageid /> }/>
          <Route path='new' element={ <TestpageNew /> }/>
        </Route>
      </Routes>
      <br />
      <Footer />
    </div>
  )
}

export default App