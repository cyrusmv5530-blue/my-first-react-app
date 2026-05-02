import { useEffect, useState } from "react";
import img1 from "../images/seal1.png"

function ProfileCard({myTitle, mySubtitle, text, img1, img2}) {
    const[user, setUser] = useState(null)

useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser){
        setUser(savedUser);
    }
}, []);  return (
    <>
    <div className = 'bg-secondaryBox2 border-accent2  border p-6 m-6 shadow-xl/15 rounded-md'>
      <div className = "border-l-accent2 border-r-accent2 border-r-2 border-l-2 p-6">
        <h1 className = 'text-4xl font-bold font-sgummy text-center w-fit m-auto bg-border-secondaryBox'>{user ? user.email : myTitle}</h1>
        <h4 className = 'text-center text-2xl font-sgummy'>{user ? "Logged In User":mySubtitle}</h4>
        <p className = "font-sgummy text-text text-xl m-6">{user ? "Welcome Back":text}</p>
      </div>
    </div>
    </>
  );
}

export default ProfileCard;
