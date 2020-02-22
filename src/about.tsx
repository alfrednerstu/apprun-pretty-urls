import app, {Component} from 'apprun';

export default class aboutComponent extends Component {
  state = 'About';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <p>{state} us here</p>
    </div>
  }

  update = {
    '/about': state => state,
  }
}
