import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Users from "./src/components/user/Users.jsx";
import Signup from "./src/components/user/Signup.jsx";
import Signin from "./lib/Signin.jsx";
import Profile from "./src/components/user/Profile.jsx";
import PrivateRoute from "./lib/PrivateRoute.jsx";
import EditProfile from "./src/components/user/EditProfile.jsx";
import Menu from "./core/Menu";
import AddItem from "./item/AddItem.jsx";
import FlashcardQuiz from './src/components/flipcard/FlashcardQuiz.jsx';
import Ranking from './src/components/ranking/Ranking.jsx';


function MainRouter() {
  return (
    <div>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/users/:userId/flashcard-quiz" element={<FlashcardQuiz />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
