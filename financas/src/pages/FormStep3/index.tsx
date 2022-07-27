import * as C from './styles'
import {Theme} from '../../components/Theme'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useForm,FormAction} from '../../contexts/FormContext'
import { ChangeEvent ,useEffect} from 'react'
export const FormStep3 = ()=>{

    const history = useNavigate();

    const {state,dispatch}  = useForm();

    useEffect(()=>{
        if(state.name === ''){
            history('/')
        }else{
            dispatch({
                type:FormAction.setCurrentStep,
                payload:3
            })
        }
        
    },[])

    const handleNextStep =()=>{
        if(state.email !=='' && state.github !==''){
            console.log(state)
        }else{
            alert('preencha os dados')
        
    }   
    }

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormAction.setEmail,
            payload:e.target.value,
        });
    }
    const handleGithubChange = (e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormAction.setGithub,
            payload:e.target.value,
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name},onde te achamos?</h1>
                <p>Preencha com seus contatos para entrarmos em contato</p>
                <hr></hr>
                <label>Seu nome e-mail?
                    <input 
                    onChange={handleEmailChange}
                    value={state.email} autoFocus type={'email'}>
                    </input>
                </label>
                <label>Seu GitHub?
                    <input 
                    onChange={handleGithubChange}
                    value={state.github} autoFocus type={'url'}>
                    </input>
                </label>
                 
                <Link className='backButton' to={'/step2'}>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}