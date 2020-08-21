import './styles/main.css'
import { model } from './model'

const site = document.querySelector('#site');
model.forEach((block) => {
   site.insertAdjacentHTML('beforeend', block.toHTML())
})

