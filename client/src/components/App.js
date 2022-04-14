import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import Header from "./Header";
import CoinTracker from "./CoinTracker";
import CoinData from "./CoinData";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "./Footer";
import Forum from "./Forum";
import Subforum from "./Subforum";
import CreatePost from "./CreatePost";
import Post from "./Post";

function App() {
  const [user, setUser] = useState("");

  <GlobalStyle />;

  const MainContainer = styled.div`
    display: grid;
    /* grid-template-columns: 60% 40%; */
  `;

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  const ct = { user };

  return (
    <div>
      <GlobalStyle />
      <Header user={user} setUser={setUser} />
      <MainContainer>
        <Routes>
          <Route path="/" element={<CoinTracker user={user} />} />
          <Route path="/forum" element={<Forum user={user} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/:id" element={<CoinData />} />
          <Route path="/forum/:coin" element={<Subforum user={user} />} />
          <Route path="/create-post" element={<CreatePost user={user} />} />
          <Route path="/posts/:id" element={<Post user={user} />} />
        </Routes>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
