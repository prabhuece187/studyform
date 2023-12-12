import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Routes,Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import StudyForm from './pages/studyform';
import DynamicForm from './pages/dynamicform';
import Layout from './pages/layout';


function App() {
  return (
    <ChakraProvider>
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="studyform" element={<StudyForm/>} />
            <Route path="dynamicform" element={<DynamicForm/>} />
         </Route>
      </Routes>

    </ChakraProvider>

  );
}

export default App;


