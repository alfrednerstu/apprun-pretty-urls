import app, {Component} from 'apprun';

export default class headerComponent extends Component {
  state = 'Apprun Pretty URLs';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <nav>
        <ul>
          <li><a href='/' $prettylink>Home</a></li>
          <li><a href='/contact' $prettylink>Contact</a></li>
          <li><a href='/about' $prettylink>About</a></li>
        </ul>
      </nav>
    </div>
  }

  update = {
  }
}
