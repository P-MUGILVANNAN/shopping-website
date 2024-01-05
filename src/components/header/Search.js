import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 40px;
  display:flex;
`;
const InputSearchBase = styled(InputBase)`
  margin-left: 20px;
  width: 100%;
  font-size:unset;
`;

const SearchIconWrapper=styled(Box)`
color:blue;
padding:5px;
display:flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for Products,Brands and More..." />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
