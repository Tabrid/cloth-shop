import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("cais-user")) || null);
	const [refresh, setRefresh] = useState(false);
	const [balance, setBalance] = useState(0);
	const [location, setLocation] = useState({});
	const [slideCard, setSlideCard] = useState(false)
	const [showSearch , setShowSearch] = useState(false)
	return <AuthContext.Provider value={{ authUser, setAuthUser, refresh, setRefresh, balance, setBalance , location , setLocation ,slideCard, setSlideCard ,showSearch , setShowSearch }}>{children}</AuthContext.Provider>;
};