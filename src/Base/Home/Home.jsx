import React from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import GroupCard from "./GroupCard/GroupCard";
import GroupDetails from "./GroupDetails/GroupDetails";
import { Button } from "antd";
import AddGroupDrawer from "./AddGroupDrawer/AddGroupDrawer";
import { useState } from "react";
import { useContext } from "react";
import { GroupDetailContext } from "../../App";

const Home = () => {
  const {groupDetails} = useContext(GroupDetailContext);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showGroupList, setShowGroupList] = useState(true);
  const [selectedGroupDetail, setSelectedGroupDetail] = useState({});

  const handleAddGroup = () => {
    setDrawerOpen(true);
  };

  const handleCardClick = (group_id = 0) => {
    setShowGroupList(false)
    const filteredValue = (groupDetails || []).filter(val => val.group_id === group_id);
    setSelectedGroupDetail(filteredValue[0]);
  };

  return (
    <div className="home">
      <Navbar />
      {
        showGroupList ? (
        <div>
          <div className="home_header">
            <h2>Group</h2>
            <Button type="primary" onClick={() => handleAddGroup()}>
              Add group
            </Button>
          </div>
          <div className="home_body">
            {groupDetails.map((val) => {
              return <GroupCard key={val.group_id} value={val} handleCardClick={handleCardClick} />;
            })}
          </div>
          <AddGroupDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </div>) : 
        <GroupDetails
          groupDetails={selectedGroupDetail}
        />
      }
    </div>
  );
};

export default Home;
