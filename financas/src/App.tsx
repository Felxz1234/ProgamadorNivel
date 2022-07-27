import React from "react";
import {Rotas} from './router'
import {FormProvider} from './contexts/FormContext'

const App = ()=>{
    return(
        <FormProvider>
            <Rotas />
        </FormProvider>
        
    );
}


export default App