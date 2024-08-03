import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Pruthviraj",
    lastName: "JSM",
    email: "makeitrealpc@gmail.com",
  };
  return (
    <div className="home">
      <div className="home-content">
        <HeaderBox
          title="Welcome"
          type="greeting"
          user={loggedIn?.firstName}
          subtext="Access and manage your account and transcations efficiently!"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={3}
          totalCurrentBalance={1252.35}
        />
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transcations={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 1503.5 }]}
      />
    </div>
  );
};

export default Home;
