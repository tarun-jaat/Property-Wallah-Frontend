// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL='http://localhost:9002/api/v1'

export const AUTH_API={
    SendOtp: `${BASE_URL}/user/send-otp`,
    VerifyOtp:`${BASE_URL}/user/verify-otp`
}
console.log('hii',BASE_URL)
