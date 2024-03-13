import React from "react";
import "./UserDetail.css";

function UserDetail({ user }) {
    return (
        <div className="detail">
            <div className="detail__image">
                <img
                    src={
                        user.avatar.includes("fakercloud")
                            ? "https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
                            : user.avatar
                    }
                    alt="profile"
                />
            </div>
            <h4>{user.profile.username}</h4>
            <p>{user.jobTitle}</p>
            <br></br>
            <br></br>
            <div className="detail__detail">
                <h4>Name</h4>
                <p>{`${user.profile.firstName} ${user.profile.lastName}`}</p>
                <br></br>
                <h4>Bio</h4>
                <p>{user.Bio}</p>
                <br></br>
                <h4>Email ID</h4>
                <p>{user.profile.email}</p>
            </div>
        </div>
    );
}

export default UserDetail;
