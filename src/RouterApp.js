import { Link, Outlet } from "react-router-dom";

export default function RouterApp() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" />
          トップ
        </li>
        <li>
          <Link to="/article" />
          公開記事です
        </li>
        <li>
          <Link to="/about" />
          このサイトについてのこと
        </li>
      </ul>
      <hr />
    </>
  );
}
