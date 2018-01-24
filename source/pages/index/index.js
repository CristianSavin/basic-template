import './index.scss';
import createMenu from '../../components/menu/menu';
var menu = createMenu(['Principala' , 'Blog'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');