import { Outlet } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";

export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
    </>
  );
}