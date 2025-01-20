import Axios from "../../Common/BaseApi/Axios";
import { usersAPI } from "./baseAli";

const fetchUserDetails = async () => {
    try {
        const response = await Axios({
            ...usersAPI.userDetails,
        });

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        console.error("Error fetching user details:", error);

        return {
            success: false,
            message: error.response?.data?.message || "Failed to fetch user details.",
        };
    }
};

export default fetchUserDetails;
