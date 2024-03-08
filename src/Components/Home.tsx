import React, { useContext, useEffect } from 'react'
import { ProjectsDetailContext } from '../context/CardContext';
import { Project } from './Project';
import UseSnackbar from './UseSnackbar';
import ProjectModal from './ProjectModal';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const Home = () => {

    const [open, setOpen] = React.useState(false);
  const projectDetail = useContext(ProjectsDetailContext)

  useEffect(() => {

    const projectCardsJSON = localStorage.getItem('projectCards');

    if (projectCardsJSON !== null){
      const projectCards = JSON.parse(projectCardsJSON);

      if(projectDetail.projectDetail !== projectCards){
        projectDetail.setProjectDetail(projectCards);
      }

    }
} 
    , [])


  return (
    <>
    <Breadcrumbs aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href="/">
    Home
  </Link>
    <Typography color="text.primary">Project</Typography>   
    </Breadcrumbs>
      <div 
    style={
      {display: "flex", justifyContent: "center", padding: "15px" }
      }>
        <ProjectModal open = {open} setOpen = {setOpen}/>
    </div>
    <UseSnackbar open = {open} setOpen = {setOpen} />
    <Project />
    </>
  )
}

export default Home
