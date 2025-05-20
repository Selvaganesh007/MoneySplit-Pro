export const groupDetailReducer = (state, action) => {
  switch (action.type) {
    case "AddNewGroup":
      return [...state, action.payload];
    case "AddMember": {
      const { group_id, member_name } = action.payload;
      const updatedArray = (state || []).reduce((acc, cur) => {
        let selectedGroup = [...acc];
        if (cur.group_id === group_id) {
          const memberObj = {
            member_name: member_name,
            member_id: cur.group_members.length + 1,
            borrowed_amount: 0,
            owned_amount: 0,
          };
          selectedGroup.push({...cur, group_members: [...cur.group_members, memberObj] });
        } else {
          selectedGroup.push(cur)
        }
        return selectedGroup;
      }, []);
      return updatedArray;
    }
    default:
      return state;
  }
};
