import { toast } from "react-hot-toast";
import { apiConnector } from "../ApiConnector";
import { setPwUser } from "../../Redux/Profile"; 
import { setLoading, setPwtoken } from "../../Redux/Auth"; 
import { AUTH_API } from "../Apis";

const { SendOtp, VerifyOtp } = AUTH_API;

export function sendOtp(email) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SendOtp, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function verifyOtp(email, otp) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", VerifyOtp, {
        email,
        otp,
      });
      console.log("VERIFYOTP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      localStorage.setItem("pwUser", JSON.stringify(response.data.user));
      localStorage.setItem("Pwtoken", JSON.stringify(response.data.token));

      toast.success("OTP Verified Successfully");
      dispatch(setPwUser(response.data.user)); 
      dispatch(setPwtoken(response.data.token)); 
    } catch (error) {
      console.log("VERIFYOTP API ERROR............", error);
      toast.error("Invalid OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    localStorage.removeItem("pwUser");
    localStorage.removeItem("Pwtoken");

    dispatch(setPwtoken(null)); 
    dispatch(setPwUser(null)); 

    toast.success("Logged Out");
    navigate("/");
  };
}
