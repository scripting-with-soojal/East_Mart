import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Profile = () => {
    const [auth] = useAuth();
    return (
        <Layout title={"Dashboard - Create Category"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h3> User Name : {auth?.user?.name}</h3>
                        <h3> User Email : {auth?.user?.email}</h3>
                        <h3> User Contact : {auth?.user?.phone}</h3>
                        <h3> User Address : {auth?.user?.address}</h3>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;