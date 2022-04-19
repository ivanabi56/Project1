import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../../assets/FullLogo.png";

import index from "../../index.css";
import { Button } from "@mui/material";
import Connect from "./Connect"; 

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));
const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <a href="https://avayofinance.com" target="__blank">
        <img src={logo} alt="" width={"100%"} style={{ marginTop: -48 }} />
      </a>
      <Connect responsive={false} />
      <Typography style={{color: "#2CCBFF"}} variant="h6" marginTop={-3}>
      AVAYOFinance - Sustainable mining solution
      </Typography>
      <ButtonContainer container>
      <Grid item flexGrow={1} marginLeft={1} marginTop={3}>
              <a href="https://github.com/AvayoFinance/WHITEPAPER_V1" target="__blank">
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                
                
              > 
                WHITEPAPER
              </Button>
              </a>
            </Grid>
            <Grid item flexGrow={1} marginLeft={1} marginTop={3}>
              <a href="https://hazecrypto.net/audit/avayofinance" target="__blank">
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                
                
              >
                AUDIT 
              </Button>
              </a>
            </Grid>
            </ButtonContainer>
    </Wrapper>
  );
}
