import app, {Component} from 'apprun';

export default class aboutComponent extends Component {
  state = 'about';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <a href="/contact" $prettylink>Contact</a>
    </div>
  }

  update = {
    '/about': state => state,
  }
}
