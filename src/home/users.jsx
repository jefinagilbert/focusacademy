import * as Material from '@mui/material'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

export default function UserCard(props){
    return(
        <Material.ListItem
            key={props.user.email}
            disablePadding
        >
            <Material.ListItemButton>
            <Material.ListItemAvatar>
                {<Material.Avatar
                alt={`Avatar n°${1}`}
                src={props.user.picture.thumbnail}
                /> || <Skeleton />}
            </Material.ListItemAvatar>
            <h4 style={{color : '#fff'}}>{props.user.name.first || <Skeleton />} {props.user.name.last || <Skeleton />}</h4>
            </Material.ListItemButton>
        </Material.ListItem>
    )
}