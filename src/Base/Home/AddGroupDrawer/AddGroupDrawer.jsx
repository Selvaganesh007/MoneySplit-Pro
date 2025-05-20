import React from 'react';
import './AddGroupDrawer.scss';
import { Button, Drawer, Input, Space } from 'antd';
import { useState } from 'react';
import { useContext } from 'react';
import { GroupDetailContext } from '../../../App';

const INITIAL_STATE = {
  group_name: '',
  group_id: '',
  group_members: [],
}

const AddGroupDrawer = ({drawerOpen, setDrawerOpen}) => {
  const {groupDetails, dispatch} = useContext(GroupDetailContext);

  const [groupDetail, setGroupDetail] = useState(INITIAL_STATE);
  const [memberName, setMemberName] = useState('');

  const handleGroupDetail = (value, field) => {
    if (field === 'group_name') {
      setGroupDetail({...groupDetail, group_name: value, group_id: groupDetails.length + 1 })
    } else if (field === 'group_members') {
      setGroupDetail({...groupDetail, group_members: [...groupDetail.group_members, value]})
    }
  }
  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setGroupDetail(INITIAL_STATE);
  }

  const handleAddNewGroup = () => {
    if (groupDetail.group_name !== '' && groupDetail.group_members.length >= 3) {
      dispatch({ type: "AddNewGroup", payload: groupDetail });
      handleDrawerClose();
    } else {
      alert('Kindly fill the all mandatory fields. Make sure 3 members add necessary');
    }
  }

  const handleAddMember = () => {
    const value = {
      member_name: memberName, 
      member_id: groupDetail.group_members.length + 1,
      borrowed_amount: 0,
      owned_amount: 0,
    }
    handleGroupDetail(value, 'group_members');
    setMemberName('');
  }

  return (
    <div className='addGroupDrawer'>
      <Drawer
        title="Add New Group"
        placement="right"
        width={500}
        onClose={() => handleDrawerClose()}
        open={drawerOpen}
        extra={
          <Space>
            <Button onClick={() => handleDrawerClose()}>Cancel</Button>
            <Button type="primary" onClick={() => handleAddNewGroup()}>
              Add
            </Button>
          </Space>
        }
      >
        <span>Group Name:*</span>
        <Input
          placeholder="Enter Group Name"
          value={groupDetail.group_name}
          onChange={(e) =>
            handleGroupDetail(e.target.value, "group_name")
          }
        />
        <h2>Group Members*</h2>
        <div className='groupMemberBox'>
        {
          (groupDetail?.group_members.length > 0) ? (groupDetail?.group_members)?.map(val => {
            return <div key={val?.member_id} className='groupMembers'>
              <div className='member'>
                <h4>{val?.member_name}</h4>
                <h5>❌</h5>
              </div>
            </div>
          }) : <h3>No member...</h3>
        }
        </div>
        <span>Member Name:</span>
        <Input
          placeholder="Enter Member Name"
          value={memberName}
          onChange={(e) =>
            setMemberName(e.target.value)
          }
        />
        <Button onClick={() => handleAddMember()}>Add Member</Button>
      </Drawer>
    </div>
  )
}

export default AddGroupDrawer;