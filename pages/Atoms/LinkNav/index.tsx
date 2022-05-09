import Link from "next/link";

interface LinkNavProps {
  title: string;
}
export default function LinkNav(props: LinkNavProps) {
  const { title } = props;
  return (
    <li className="nav-item font-weight-bold active">
      <Link href="/">
        <a className="nav-link mx-2">{title}</a>
      </Link>
    </li>
  );
}
