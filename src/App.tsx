
import './App.css'
import ProjectsDetailProvider from './context/CardContext';
import Index from './index';
import ErrorBoundary from './ErrorHandling/ErrorBoundary';

function App() {

 
  return (
    <ErrorBoundary>
      <ProjectsDetailProvider>
      <Index />
      </ProjectsDetailProvider>
    </ErrorBoundary>
  
  )

}

export default App;
