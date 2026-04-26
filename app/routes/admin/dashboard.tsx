import React from 'react'
import Header from "../../../components/header";

const Dashboard = () => {
    const user={name:"uyh"}
    return (
        <main className="wrapper dashboard">
            <Header
               title={`welcome ${user?.name ?? 'Guest'} `}
               description="track Activety"
            />
        </main>
    )
}
export default Dashboard
