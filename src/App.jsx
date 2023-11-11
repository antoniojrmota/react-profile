import { useState } from 'react'

import Profile from "./components/Profile.jsx";

import foto from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={foto}
        name="@antoniojrmota"
        local="Brasília-DF"
        email="antoniojr.mota@gmail.com"
        githubUrl="https://github.com/antoniojrmota"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}
