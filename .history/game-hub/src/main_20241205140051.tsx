import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { ChakraProviderProps }, {ChakraProvider} from '@chakra-ui/react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <ChakraProvider>
       <App />
    </ChakraProvider>
 </React.StrictMode>

)
