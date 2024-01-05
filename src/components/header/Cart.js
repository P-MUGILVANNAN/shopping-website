import { Box ,Typography,styled} from "@mui/material"
import {ShoppingCart} from "@mui/icons-material"
import NotificationsIcon from '@mui/icons-material/Notifications';

const Wrapper=styled(Box)`
display:flex;
`;

const Container=styled(Box)`
display:flex;
margin-left:270px;
`;

const Cart=()=>{
    return(
            <Wrapper>
            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <Box style={{marginLeft:20}}>
            <NotificationsIcon />
            </Box>
            <Box>Notifications</Box>
            </Wrapper>
            
            
        
    )
}
export default Cart;