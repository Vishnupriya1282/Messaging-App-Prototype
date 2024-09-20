import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Sidebar from "./components/sidebar/Sidebar";
import MessageContainer from "./components/messages/MessageContainer";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/home"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path='/home' element={authUser ? <Navigate to='/' /> : <Home />} />
				<Route path='/sidebar' element={authUser ? <Navigate to='/' /> : <Sidebar />} />
				<Route path='/messagec' element={authUser ? <Navigate to='/' /> : <MessageContainer />} />

			</Routes>
			
			<Toaster />
		</div>
	);
}

export default App;