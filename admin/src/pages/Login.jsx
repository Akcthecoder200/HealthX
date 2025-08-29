import { useContext, useState } from "react";

import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        console.log("Attempting admin login with:", { email, password });
        console.log("Backend URL:", backendUrl);

        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        console.log("Login response:", data);

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
          toast.success("Admin login successful!");
        } else {
          toast.error(data.message);
        }
      } else {
        // Doctor Login
        console.log("Attempting doctor login with:", { email, password });
        console.log("Backend URL:", backendUrl);

        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });
        console.log("Doctor login response:", data);

        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
          toast.success("Doctor login successful!");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  };

  const goBackToMainSite = () => {
    // Navigate to the main website (remove /admin from URL)
    window.location.href = window.location.origin;
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg">
        {/* Back Button */}
        <button
          type="button"
          onClick={goBackToMainSite}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 mb-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back 
        </button>

        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary"> {state}</span> Login
        </p>

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>

        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-primary underline cursor-pointer text-xs"
              onClick={() => setState("Doctor")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-primary underline cursor-pointer text-xs"
              onClick={() => setState("Admin")}
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
