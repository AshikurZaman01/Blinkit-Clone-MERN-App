import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useEffect, useCallback } from "react";
import fetchUserDetails from "./Common/BaseApi/fetchUserDetails";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./Redux/features/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const fetchUser = useCallback(async () => {

    try {

      const userData = await fetchUserDetails();

      if (userData?.success && userData.data) {

        dispatch(setUserDetails(userData.data));

      } else {

        console.error("Failed to fetch user details:", userData?.message);

      }

    } catch (error) {
      console.error("Error in fetchUser:", error);
    }

  }, [dispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Header />

      <main className="min-h-[78vh]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
