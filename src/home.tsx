import app, {Component} from 'apprun';

export default class homeComponent extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <p>Welcome {state.toLowerCase()}</p>
    </div>
  }

  update = {
    '/': state => state,
  }
}
