import './style.css';
import { projectsList, tasksContainer } from './variables';
import navBar from './navBar';

const globalContainer = document.querySelector('#container');
globalContainer.append(navBar(projectsList), tasksContainer);
if (projectsList.length > 0) {
  const defaultShownTab = document.querySelector(`#proj_${projectsList[0].id}`);
  defaultShownTab.classList.add('shown');
}
