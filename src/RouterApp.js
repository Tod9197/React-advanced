import { Link, Outlet } from "react-router-dom";

export default function RouterApp() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" />
          トップへ
        </li>
        <li>
          <Link to="/article" />
          公開記事
        </li>
        <li>
          <Link to="/about" />
          このサイトについて
        </li>
      </ul>
      <hr />
    </>
  );
}
