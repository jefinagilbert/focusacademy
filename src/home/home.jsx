import React, { useEffect, useState } from "react";
import * as Material from '@mui/material'
import axios from "axios";
import UserCard from "./users";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from '../redux/actions'
import LoadingCard from "./loading";

function Home(){
    const [users, setUsers] = useState()
    const [searchUser, setSearchUser] = useState([])
    const [searchName, setSearchName] = useState('')
    const loginData = useSelector(state=> state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const fetchData = () => {
            axios.get("https://randomuser.me/api/?results=500").then(res=>{
                setUsers(res.data.results)
            })
        }
        if(!loginData){
            navigate("/")
        }
        fetchData()
        setTimeout(() => {
            setLoading(false)
          }, 2000);
    }, [loginData])

    const searchUsers = () => {
        users.forEach(us=>{
            if((us.name.first.toLowerCase().includes(searchName) && searchName.length !== 0) || (us.name.last.toLowerCase().includes(searchName) && searchName.length !== 0)){
                setSearchUser(prev=> [...prev,us])
            }
        })
    }

    const onChangeUser = (e) => {
        setSearchName(e.target.value)
        if(e.target.value.length === 0){
            setSearchUser([])
        }
    }

    const logOut = () => {
        dispatch(login(false))
        navigate("/")
    }

    return(
        <Material.Box sx={{ display : 'flex', flexDirection : 'column', alignItems : 'center', height : '100vh' }}>
            <Material.Paper
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 360, height : '8%' }}
                >
                <Material.IconButton sx={{ p: '10px' }} aria-label="menu" onClick={logOut}>
                    <LogoutIcon />
                </Material.IconButton>
                <Material.InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Users" value={searchName}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={onChangeUser}
                />
                <Material.IconButton type="submit" sx={{ p: '10px' }} onClick={searchUsers} aria-label="search">
                    <SearchIcon />
                </Material.IconButton>
                <Material.Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Material.Paper>
            {!loading ? 
            <Material.List dense sx={{ width: '100%', width: 360, bgcolor: '#515152', height : '92%', overflowY : 'scroll' }}>
                {searchName.length !== 0 ? 
                searchUser && searchUser.map((value) => {
                    return (
                        <UserCard user={value} />
                    );
                }) : users && users.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <UserCard user={value} />
                    );
                })}
            </Material.List> : 
            <Material.List dense sx={{ width: '100%', width: 360, bgcolor: '#515152', height : '92%', overflowY : 'scroll' }}>
                {[0,1,2,3,4,5,6, 7,8,9,10,11].map(s=>{
                    return(
                        <LoadingCard s={s} />
                    )
                })}
            </Material.List>
             }
        </Material.Box>
    )
}

export default Home