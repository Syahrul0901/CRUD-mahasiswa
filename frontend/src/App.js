import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MahasiswaList from './components/MahasiswaList';
import AddMahasiswa from './components/AddMahasiswa';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
              <Route exact path="/">
                <MahasiswaList />
              </Route>
              <Route path="/add">
                <AddMahasiswa />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
