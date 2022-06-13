import * as Material from "@mui/material"; // only package i used
import { useState } from "react";
import {styles} from './formStyle'
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import {login} from '../redux/actions'
import { useNavigate } from "react-router-dom";

function Validations(){
    const [email, setEmail] = useState({ value : '', error : false })
    const [password, setPassword] = useState({ value : '', error : false })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitForm = () => {
        if(email.value === "foo"){
            if(password.value === "bar"){
                dispatch(login(true))
                navigate('/home')
            }
            else{
                alert("Wrong")
            }
        }
        else{
            alert("Wrong")
        }
    }

    return(
        <Material.Box sx={styles.main} >
            <Material.Paper elevation={20} sx={styles.form}>
                <Material.Typography variant="h4">Login Form</Material.Typography>
                <Material.Box sx={styles.inputBox}>
                    <Material.TextField onChange={e => setEmail(prev=> ({...prev, value : e.target.value}))} value={email.value} sx={styles.input} label="Email" variant="standard" helperText={email.error ? <Material.Typography sx={styles.helperTxt}>
                        Not Valid
                    </Material.Typography> : ''} />
                </Material.Box>
                <Material.Box sx={styles.inputBox}>
                    <Material.TextField type="password" onChange={e=> setPassword(prev=> ({...prev, value : e.target.value}))} value={password.value} sx={styles.input} label="Password" variant="standard" helperText={password.error ? <Material.Typography sx={styles.helperTxt}>
                        Not Valid
                    </Material.Typography> : ''} />
                </Material.Box>
                <Material.Box sx={{marginTop : '20px'}}>
                    <Material.Button onClick={submitForm} variant="contained">Submit</Material.Button>
                </Material.Box>
            </Material.Paper>
            {/* 
            <Material.Skeleton variant="rectangular" width={210} height={118} /> */}
        </Material.Box>
    )
}

export default Validations