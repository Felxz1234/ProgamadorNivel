import * as C from './styles'
import {Theme} from '../../components/Theme'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useForm,FormAction} from '../../contexts/FormContext'
import { ChangeEvent ,useEffect} from 'react'
export const FormStep1 = ()=>{

    const history = useNavigate();

    const {state,dispatch}  = useForm();

    useEffect(()=>{
        dispatch({
            type:FormAction.setCurrentStep,
            payload:1
        })
    },[])

    const handleNextStep =()=>{
        if(state.name !==''){
            history('/step2')
        }else{
            alert('Escreva seu nome.')
        }
    }

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormAction.setName,
            payload:e.target.value,
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr></hr>
                <label>Seu nome completo
                    <input 
                    onChange={handleNameChange}
                    value={state.name} autoFocus type={'text'}>
                    </input>
                </label>
                 
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}
