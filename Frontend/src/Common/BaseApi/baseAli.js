
export const baseURL = "http://localhost:3000";

const summaryAPI = {
    register: {
        url: "/api/v1/user/userRegister",
        method: 'post'
    },

    login: {
        url: "/api/v1/user/userLogin",
        method: 'post'
    },

    logout: {
        url: "/api/v1/user/userLogout",
        method: 'get'
    },

    uploadUserImage: {
        url: "/api/v1/user/uploadUserImage",
        method: 'put'
    },

    userDetailsUpdate: {
        url: "/api/v1/user/userDetailsUpdate",
        method: 'put'
    },

    forgotPassword: {
        url: "/api/v1/user/userForgotPassword",
        method: 'put'
    },

    verifyForgotPasswordOTP: {
        url: "/api/v1/user/verifyForgotPasswordOTP",
        method: 'put'
    },

    resetPassword: {
        url: "/api/v1/user/resetPassword",
        method: 'put'
    },

    refreshToken: {
        url: "/api/v1/user/refreshToken",
        method: 'post'
    }
}

export default summaryAPI;