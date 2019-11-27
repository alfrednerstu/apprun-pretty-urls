import app, {Component} from 'apprun';

export default class headerComponent extends Component {
  state = 'header';

  view = (state) => {
    return <nav>
      <a href='/'>Home</a>
      <a href='/#contact'>Contact</a>
      <a href='/#about'>About</a>
    </nav>
  }

  update = {
    '#header': state => state,
  }
}
