import React, { useContext } from 'react'
import { ProjectsDetailContext } from '../context/CardContext';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

export const Project = () => {

    const projectDetail = useContext(ProjectsDetailContext);




  return (

    <Grid  container spacing={0.5} xs = {14} sx={{marginTop:"20px"}}>
          {projectDetail.projectDetail.map((item) => (
            <Grid item lg = {2} >

            <ProjectCard name = {item.name} region={item.region} serialId={item.serialId} />

            </Grid>
          ))}
        </Grid>
  )
}
