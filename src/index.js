import './styles/main.css'
import { model } from './model'
import { Site } from './classes/site'

const site = new Site('#site');

site.render(model);

