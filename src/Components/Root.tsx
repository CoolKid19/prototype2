import React, { useContext, useEffect } from 'react'
import PrimarySearchAppBar from './NavBar'
import ProjectModal from './ProjectModal'
import UseSnackbar from './UseSnackbar';

import { ProjectsDetailContext } from '../context/CardContext';
import { Project } from './Project';
import { Outlet } from 'react-router-dom';




export default function Root() {

  

  return (
    <>
    <PrimarySearchAppBar />
    
    <Outlet/>
    

    </>
 )
}
