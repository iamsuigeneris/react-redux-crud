import HomePage from './components/HomePage'
import EditPage from './components/EditPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/edit/:id" component={EditPage} />
      </Switch>
    </Router>
  );
}

export default App;
