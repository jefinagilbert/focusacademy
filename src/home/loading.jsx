import * as Material from '@mui/material'

export default function LoadingCard(props){
    return(
        <Material.ListItem
            key={props.s}
            disablePadding
        >
            <Material.ListItemButton>
            <Material.ListItemAvatar>
                <Material.Skeleton variant="circular" width={40} height={40} />
            </Material.ListItemAvatar>
                <Material.Skeleton variant="rectangular" width={310} height={45} />
            </Material.ListItemButton>
        </Material.ListItem>
    )
}