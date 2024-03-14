import React, { useEffect, useState } from "react";
import "./App.css";
import UserDetail from "./UserDetail";
import { MoonLoader } from "react-spinners";

function App() {
    const [users, setUsers] = useState();
    const [selectedUser, setSelectedUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        async function getUsers() {
            setIsLoading(true);
            await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
                .then((response) => {
                    setStatus(() => response.status);
                    return response.json();
                })
                .then((result) => {
                    setUsers(() => result);
                    setSelectedUser(() => result[0]);
                });
            setIsLoading(false);
        }

        getUsers();
    }, []);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>User Search</h1>
            <div className="app">
                {isLoading ? (
                    <div className="loader">
                        <MoonLoader />
                    </div>
                ) : status === 200 ? (
                    users && (
                        <>
                            <div className="user__container">
                                {users.map((user) => (
                                    <div
                                        key={user.email}
                                        className="user__card"
                                        onClick={() =>
                                            setSelectedUser(() => user)
                                        }
                                    >
                                        <div className="user__image">
                                            <img
                                                src={
                                                    user.avatar.includes(
                                                        "fakercloud"
                                                    )
                                                        ? "https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
                                                        : user.avatar
                                                }
                                                alt="profile"
                                            />
                                        </div>
                                        <div className="user__detail">
                                            <h4>{`${user.profile.firstName} ${user.profile.lastName}`}</h4>
                                            <p>{user.profile.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <UserDetail user={selectedUser} />
                        </>
                    )
                ) : (
                    <p>No data to show</p>
                )}
            </div>
        </>
    );
}

export default App;
