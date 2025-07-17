import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// import Navbar from "./Navbar";
import SideAnchorLinks from "./SideAnchorLinks";
import { Container, useMediaQuery, styled, useTheme } from "@mui/material";


const StyledMainPage = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.main,
    overflow: "hidden",
  }));
  const StyledMainContainer = styled(Container)({
    maxWidth: "1600px",
  });

export default function Contact() {
      const theme = useTheme();
      const navigate = useNavigate();
     // const showSideAnchor = useMediaQuery(theme.breakpoints.up("lg"));
    
    
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#2c2c2c"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
    const showSideAnchor = useMediaQuery(theme.breakpoints.up("lg"));
  

  return (
    <>
         {/* <Navbar /> */}
          <StyledMainPage>
            {showSideAnchor && <SideAnchorLinks />}
            <StyledMainContainer>
            <div style={{ background: "#fff",  padding: "40px", minHeight: "100vh" }}>
            <Button
              variant="outlined"
              startIcon={<ArrowLeft />}
              onClick={() => navigate("/")}
              style={{
                marginBottom: "16px",
                color: "#2c2c2c",
                borderColor: "#2c2c2c",
              }}
            >
              Back
            </Button>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>
        Schedule a Call
      </h1>
      <p style={{ color: "#2c2c2c", marginBottom: "24px" }}>
        If you can’t find a time that works for you, please{" "}
        <a
          href="mailto:connect.harshalmten@gmail.com"
          style={{ color: "#4da6ff", textDecoration: "underline" }}
        >
          email me
        </a>{" "}
        to arrange a custom slot.
      </p>

      <div style={{ width: "100%", height: "700px", overflow: "scroll" }}>
        <Cal
          namespace="15min"
          calLink="iharshu/15min"
          style={{ width: "100%", height: "100%" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
            </StyledMainContainer>
          </StyledMainPage>
   
    </>
  );
}
