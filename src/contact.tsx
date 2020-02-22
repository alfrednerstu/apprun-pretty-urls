import app, {Component} from 'apprun';

export default class contactComponent extends Component {
  state = 'Contact';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <p>{state} us here</p>
    </div>
  }

  update = {
    '/contact': state => state,
  }
}
