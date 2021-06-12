const Link = ({ pageRoute, pageName }) => {
  const route = window.location.pathname;
  return (
    <li className="nav-item">
      <a
        className={
          route === pageRoute
            ? "nav-link active route-active"
            : "nav-link nav-over"
        }
        aria-current="page"
        href={pageRoute}
      >
        {pageName}
      </a>
    </li>
  );
};

export default Link;
