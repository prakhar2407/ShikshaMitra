import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserEmail } from "../../hooks/authSlice";

export default function Welcome() {
  const userEmailId = useSelector(selectCurrentUserEmail);
  return <div>{!!userEmailId ? `Welcome ${userEmailId}` : `Welcome`}</div>;
}
