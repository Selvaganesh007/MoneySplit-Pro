import { Button, Input, Modal, Select } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "./GroupDetailsActions.scss";
import { GroupDetailContext } from "../../../../App";

const GroupDetailsActions = ({ groupId, setGroupMemberList, groupMembersList = [] }) => {
  // add group member popup state
  const [openAddMember, setOpenAddMember] = useState(false);
  const [openAddExpence, setOpenAddExpence] = useState(false);
  const [memberName, setMemberName] = useState("");
  // add expence popup state
  const [dropDownMemberList, setDropDownMemberList] = (groupMembersList);
  const [selectedSplitMember, setSelectedSplitMember] = useState('');
  const [splitMembers, setSplitMembers] = useState([]);

  const { groupDetails, dispatch } = useContext(GroupDetailContext);

  useEffect(() => {
    setDropDownMemberList(groupMembersList);
  }, [groupMembersList]);

  useEffect(() => {
    setGroupMemberList(
      groupDetails.filter((val) => val.group_id === groupId)[0].group_members
    );
  }, [groupDetails]);

  useEffect(() => {
    if (selectedSplitMember !== '') {

      setSelectedSplitMember('');
    }
  }, [selectedSplitMember]);

  const onAddMemberClick = () => {
    if (memberName !== "") {
      dispatch({
        type: "AddMember",
        payload: { group_id: groupId, member_name: memberName },
      });
    } else {
      alert("Fill the member name");
    }
    setOpenAddMember(false);
    setMemberName("");
  };

  const handleExpenceChange = (value, field) => {};

  return (
    <div className="groupDetailsActions">
      <Button type="primary" onClick={() => setOpenAddExpence(true)}>
        Add expence
      </Button>
      <Button type="primary" onClick={() => setOpenAddMember(true)}>
        Add group member
      </Button>
      <Modal
        title="Add member"
        open={openAddMember}
        onOk={() => onAddMemberClick()}
        onCancel={() => setOpenAddMember(false)}
      >
        <span>Member Name:*</span>
        <Input
          placeholder="Enter Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        />
      </Modal>
      <Modal
        title="Add expence"
        open={openAddExpence}
        // onOk={handleOk}
        onCancel={() => setOpenAddExpence(false)}
      >
        <span>Who spend:*</span>
        <Input
          placeholder="Enter Member Name"
          value={memberName}
          onChange={(e) => handleExpenceChange(e.target.value, "member_name")}
        />
        <span>Spending Amount:*</span>
        <Input
          placeholder="Spending amount"
          value={memberName}
          onChange={(e) =>
            handleExpenceChange(e.target.value, "spending_amount")
          }
        />
        <div className="split_header">
          <div>Split for:*</div>
          <Select
            style={{ width: "30%" }}
            placeholder="Gender"
            onChange={(value) => setSelectedSplitMember(value)}
            value={selectedSplitMember}
            options={(dropDownMemberList || []).map((val) => {
              return { value: val.member_name, label: val.member_name };
            })}
          />
        </div>
      </Modal>
    </div>
  );
};

export default GroupDetailsActions;
