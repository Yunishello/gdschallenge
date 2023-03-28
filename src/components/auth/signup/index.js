import React, { useRef } from "react";
import { firestore } from "../../../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Signup = () => {
  const messageRef = useRef('');
  const ref = collection(firestore, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    const data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="bg-slate-900">
        <div className="divide-slate-900">
          <form onSubmit={handleSubmit} className="block">
            <label>Name</label>
            <input ref={messageRef} className="rounded-lg border-emerald-400" type="text" />
            {/* <label>Email</label>
            <input type="email" />
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <label>Confirm Password</label>
            <input type="password" /> */}
            <button type="submit">save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
