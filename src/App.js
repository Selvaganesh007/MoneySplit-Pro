import { createContext } from "react";
import "./App.css";
import Home from "./Base/Home/Home";
import { useReducer } from "react";
import { groupDetailReducer } from "./AppReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Base/Register/Register";
import Login from "./Base/Login/Login";

const groupDetailsInitialState = [
  {
    group_name: "Varkala",
    group_id: "1",
    group_members: [
      {
        member_name: "selva",
        member_id: 1,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "dharun",
        member_id: 2,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "hari",
        member_id: 3,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "pradeep",
        member_id: 4,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "edward",
        member_id: 5,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "thazhai",
        member_id: 6,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "ram",
        member_id: 7,
        borrowed_amount: 0,
        owned_amount: 0,
      },
    ],
  },
  {
    group_name: "Munnar",
    group_id: "2",
    group_members: [
      {
        member_name: "Siddhu",
        member_id: 1,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "Raj",
        member_id: 2,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "hari venkat",
        member_id: 3,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "praveen",
        member_id: 4,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "venkat",
        member_id: 5,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "mahadeer",
        member_id: 6,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "subash",
        member_id: 7,
        borrowed_amount: 0,
        owned_amount: 0,
      },
    ],
  },
  {
    group_name: "Kookal",
    group_id: "3",
    group_members: [
      {
        member_name: "selva",
        member_id: 1,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "dharun",
        member_id: 2,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "edward",
        member_id: 3,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "pradeep",
        member_id: 4,
        borrowed_amount: 0,
        owned_amount: 0,
      },
    ],
  },
  {
    group_name: "kovai",
    group_id: "4",
    group_members: [
      {
        member_name: "selva",
        member_id: 1,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "dharun",
        member_id: 2,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "edward",
        member_id: 3,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "Ram",
        member_id: 4,
        borrowed_amount: 0,
        owned_amount: 0,
      },
      {
        member_name: "Pradeep",
        member_id: 4,
        borrowed_amount: 0,
        owned_amount: 0,
      },
    ],
  },
];

export const GroupDetailContext = createContext();

function App() {
  const [groupDetails, dispatch] = useReducer(
    groupDetailReducer,
    groupDetailsInitialState
  );
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<GroupDetailContext.Provider value={{ groupDetails, dispatch }}>
          <Home />
        </GroupDetailContext.Provider>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
