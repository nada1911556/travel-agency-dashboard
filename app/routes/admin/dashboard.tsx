import React from "react";
import Header from "../../../components/header";

import { Stats, TripCard } from "../../../components";
import { chartOneData, dashboardStatus, user, allTrips } from "../../constants";

const { totalUsers, usersJpined, totalTrips, tripsCreated, userRole } =
  dashboardStatus;

const Dashboard = () => {
  return (
    <>
      <main className="wrapper dashboard">
        <Header
          title={`welcome ${user?.name ?? "Guest"} `}
          description="track Activety"
        />
        <section className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Stats
              headerTitle="Total Users"
              total={totalUsers}
              currentMonthCount={usersJpined.thisMonth}
              lastMonthCount={usersJpined.lastMonth}
            />
            <Stats
              headerTitle="Total Trips"
              total={totalTrips}
              currentMonthCount={tripsCreated.thisMonth}
              lastMonthCount={tripsCreated.lastMonth}
            />
            <Stats
              headerTitle="User Roles"
              total={userRole.total}
              currentMonthCount={userRole.thisMonth}
              lastMonthCount={userRole.lastMonth}
            />
          </div>
        </section>
        <section className="container">
          <h1 className="text-dark-100 font-semibold text-xl">Created Trips</h1>
          <div className="trip-grid">
            {allTrips
              .slice(0, 4)
              .map(
                ({
                  id,
                  name,
                  imageUrls,
                  itinerary,
                  tags,
                  estimatedPrice,
                }) => (
                  <TripCard
                    key={id}
                    id={id.toString()}
                    name={name}
                    imageUrl={imageUrls[0]}
                    location={itinerary?.[0]?.location ?? ""}
                    tags={tags}
                    price={estimatedPrice}
                  />
                ),
              )}
          </div>
        </section>

        {/* <TripCard /> */}
      </main>
    </>
  );
};
export default Dashboard;
