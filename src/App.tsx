import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;