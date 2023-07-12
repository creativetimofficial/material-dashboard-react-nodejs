/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication pages components
import Footer from "layouts/authentication/components/Footer";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { useLocation } from "react-router-dom";

function BasicLayout({ image, children }) {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <DefaultNavbar
        action={{
          type: "external",
          route: "https://creative-tim.com/product/material-dashboard-react-nodejs",
          label: "free download",
          color: "dark",
        }}
      />
      <MDBox sx={{ height: "auto", minHeight: "100vh" }} display="flex" flexDirection="column">
        <MDBox
          position="absolute"
          width="100%"
          minHeight="100vh"
          paddingTop="3em"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              image &&
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <MDBox
            position="relative"
            height="100%"
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="center"
            paddingTop="7em"
            paddingBottom="5em"
          >
            <MDBox paddingBottom="3rem" sx={{ textAlign: "center" }}>
              {pathname === "/auth/login" && (
                <MDBox display="flex" width="100%" justifyContent="center" sx={{ zIndex: "99" }}>
                  <MDBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    padding="1.5rem"
                    width="80%"
                  >
                    <Typography variant="h3" style={{ color: "white" }}>
                      Log in to Material Dashboard Laravel Live Preview
                    </Typography>
                    <Typography variant="body2" style={{ color: "white" }} margin="0.5rem 0">
                      Log in to see how you can go from frontend to fullstack in an instant with an
                      API-based Laravel backend
                    </Typography>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      marginBottom="0.5rem"
                    >
                      <Typography variant="body2" fontWeight="700" style={{ color: "white" }}>
                        You can log in with
                      </Typography>
                      <List dense={true}>
                        <ListItem>
                          <ListItemText
                            disableTypography
                            primary={
                              <Typography
                                variant="body2"
                                fontWeight="400"
                                style={{ color: "white" }}
                              >
                                Username{" "}
                                <Typography variant="span" fontWeight="700">
                                  admin@jsonapi.com
                                </Typography>{" "}
                                with password{" "}
                                <Typography variant="span" fontWeight="700">
                                  secret
                                </Typography>
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </MDBox>
                  </MDBox>
                </MDBox>
              )}
              <MDBox px={1} width="100%" mx="auto" paddingTop="1rem">
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                  <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
                    {children}
                  </Grid>
                </Grid>
              </MDBox>
            </MDBox>
          </MDBox>
          <Footer light />
        </MDBox>
      </MDBox>
    </PageLayout>
  );
}

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
