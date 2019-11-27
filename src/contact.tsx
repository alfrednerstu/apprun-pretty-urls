import app, {Component} from 'apprun';

export default class contactComponent extends Component {
  state = 'contact';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <a href="/about" $prettylink>About</a>
    </div>
  }

  update = {
    '/contact': state => state,
  }
}
