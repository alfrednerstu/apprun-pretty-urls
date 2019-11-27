import app from 'apprun';

import { addPrettyLinkHandlers } from "apprun-router/pretty";
addPrettyLinkHandlers("a");

//import header from './src/header';
import home from './src/home';
import contact from './src/contact';
import about from './src/about';

//const navigation = document.getElementsByTagName('header');
const element = document.getElementById('app');

//new header().mount(navigation[0]);
new home().mount(element);
new contact().mount(element);
new about().mount(element);
