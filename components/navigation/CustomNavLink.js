import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

export { CustomNavLink };

CustomNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

CustomNavLink.defaultProps = {
  exact: false,
};

function CustomNavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " border-indigo-500 text-gray-900";
  } else {
    props.className +=
      " border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
