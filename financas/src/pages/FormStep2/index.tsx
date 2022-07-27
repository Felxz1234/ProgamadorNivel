import * as C from './styles'
import { SelectOption } from '../../components/SelectOption'
import {Theme} from '../../components/Theme'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useForm,FormAction} from '../../contexts/FormContext'
import { ChangeEvent ,useEffect} from 'react'
export const FormStep2 = ()=>{

    const history = useNavigate();

    const {state,dispatch}  = useForm();

    useEffect(()=>{
        if(state.name === ''){
            history('/')
        }else{
            dispatch({
                type:FormAction.setCurrentStep,
                payload:2
            })
        }
        
    },[])

    const handleNextStep =()=>{
        if(state.name !==''){
            history('/step3')
        }else{
            alert('Digite seu nome.')
        }
    }

    const setLevel = (level:number)=>{
        dispatch({
            type:FormAction.setLevel,
            payload:level
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name},oque melhor descreve voce?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual,profissionalmente.</p>
                <hr></hr>
                
                <SelectOption
                   title='Sou iniciante'
                   description='comecei a progamar há menos de 1 ano'
                   icon='😋'
                   selected={state.level===0}
                   onClick={()=>setLevel(0)}
                 />
                 <SelectOption
                   title='Sou Progamador'
                   description='Progamo há 2 anos ou mais'
                   icon = '🤫'
                   selected={state.level===1}
                   onClick={()=>setLevel(1)}
                 />

               
                <Link className='backButton' to={'/'}>Voltar</Link> 
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}