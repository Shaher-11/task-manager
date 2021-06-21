import './style.css';
import { projectsList, tasksContainer } from './variables';
import projectNav from './navBar';

const globalContainer = document.querySelector('#container');

globalContainer.append(projectNav(projectsList), tasksContainer);
if (projectsList.length > 0) {
  const defaultShownTab = document.querySelector(`#proj_${projectsList[0].id}`);
  defaultShownTab.classList.add('shown');
}