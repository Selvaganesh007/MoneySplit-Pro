import React from 'react';
import './GroupCard.scss';

const GroupCard = ({value: {group_name, group_id, group_members}, handleCardClick}) => {
  return (
    <div className='groupCard' onClick={() => handleCardClick(group_id)}>
      <div className='groupCard_header'>
        <h3>{group_name.toUpperCase()}</h3>
      </div>
      <div className='groupCard_body'>
        <div className='groupCard_detail'>
          <h3>No of group Members:</h3>
          <ul>
            {
              group_members.map(val => {
                return <li key={val.member_id}>{val.member_name}</li>
              })
            }
          </ul>
        </div>
        <div className='groupCard_owned'>You are owned: 0</div>
        <div className='groupCard_owe'>You owe: 0</div>
      </div>
    </div>
  )
}

export default GroupCard;