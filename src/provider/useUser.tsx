import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { UserInfoRes } from "../types/user-info-res";

type UserContextProps = {
    user: UserInfoRes | null,
    setUser: Dispatch<SetStateAction<UserInfoRes | null>>
}

const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => { }
});

export const CustomUserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserInfoRes | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>);
}

export const useCustomUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

