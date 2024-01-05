import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Search from "./Search";
import Cart from "./Cart";


const Component = styled(Box)`
  margin-left: 12%;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Header = () => {
  const logoURL =
    "https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-hq-free-download-18.png";

  return (
    <AppBar>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 90 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                More...
              </Box>
            </SubHeading>
          </Box>
        </Component>
        <Search />
        <Box>
            <Cart />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
