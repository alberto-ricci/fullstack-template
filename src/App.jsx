import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/homepage/homepage";
import Login from "../src/pages/login/login";
import Register from "../src/pages/register/register";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/homepage"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
