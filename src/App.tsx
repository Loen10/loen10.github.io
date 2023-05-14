import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

// addDoc(collection(db, 'users'), {
//     first: 'Abraham',
//     last: 'Lincoln',
//     born: 1809
// }).then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
// }, (error) => {
//     console.error('Thar was an error: ', error);
// });

// getDocs(collection(db, 'users'))
//   .then((docs) => {
//     docs.forEach((doc) => {
//       console.log(`${doc.id} -> ${JSON.stringify(doc.data())}`);
//     });
//   });

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/create" element={ <Create /> } />
            <Route path="/blogs/:id" element={ <BlogDetails /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;