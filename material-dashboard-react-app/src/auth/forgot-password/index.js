import { useState, useEffect } from "react";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import authService from "services/auth-service";

function ForgotPassword() {
  const [isDemo, setIsDemo] = useState(false);
  const [notification, setNotification] = useState(false);
  const [input, setEmail] = useState({
    email: "",
  });
  const [error, setError] = useState({
    err: false,
    textError: "",
  });

  useEffect(() => {
    setIsDemo(process.env.REACT_APP_IS_DEMO === "true");
  }, []);

  const changeHandler = (e) => {
    setEmail({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.email.trim().length === 0 || !input.email.trim().match(mailFormat)) {
      setError({ err: true, textError: "The email must be valid" });
      return;
    }

    // somthing not right with the data
    const myData = {
      data: {
        type: "password-forgot",
        attributes: {
          redirect_url: `${process.env.REACT_APP_URL}/auth/reset-password`,
          ...input,
        },
      },
    };

    try {
      if (isDemo == false) {
        const response = await authService.forgotPassword(myData);
        setError({ err: false, textError: "" });
      }
      setNotification(true);
    } catch (err) {
      console.error(err);
      if (err.hasOwnProperty("errors")) {
        if (err.errors.hasOwnProperty("email")) {
          setError({ err: true, textError: err.errors.email[0] });
        } else {
          setError({ err: true, textError: "An error occured" });
        }
      }
      return null;
    }
  };

  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" method="POST" onSubmit={handleSubmit}>
            <MDBox mb={4}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={input.email}
                name="email"
                onChange={changeHandler}
                error={error.err}
              />
            </MDBox>
            {error.err && (
              <MDTypography variant="caption" color="error" fontWeight="light">
                {error.textError}
              </MDTypography>
            )}
            <MDBox mt={6} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                reset
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      {notification && (
        <MDAlert color="info" mt="20px" dismissible>
          <MDTypography variant="body2" color="white">
          {isDemo
              ? "You can't update the password in the demo version"
              : "Please check your email to reset your password."}
          </MDTypography>
        </MDAlert>
      )}
    </CoverLayout>
  );
}

export default ForgotPassword;
