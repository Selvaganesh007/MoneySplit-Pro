import React, { useState } from "react";
import "./GroupDetails.scss";
import GroupDetailsActions from "./GroupDetailsActions/GroupDetailsActions";

const GroupDetails = ({ groupDetails: { group_name, group_id, group_members = [] } }) => {
  const [groupMembersList, setGroupMemberList] = useState(group_members);
  
  return (
    <div className="groupDetails">
      <div className="groupDetails_header">
        <div className="groupDetails_imp">
          <h2>{group_name}</h2>
          <h3>Total group expenses</h3>
          <h2>0</h2>
        </div>
        <div className="group_members">
          {(groupMembersList || []).map((val) => {
            return (
              <div className="group_member">
                <h3>{val.member_name}</h3>
                <h4>How much you owned: {val.owned_amount}</h4>
                <h4>How much you borrowed: {val.borrowed_amount}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="groupDetails_body">
        <div className="groupDetails_body_header">
          <h3>Expences</h3>
          <GroupDetailsActions groupId={group_id} setGroupMemberList={setGroupMemberList} groupMembersList={groupMembersList} />
        </div>
        <div className="groupDetails_expence_cards">
          <div className="groupDetails_expence_card">
            <h3>expence title</h3>
            <div>payed person name: amount</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
