import Link from "next/link";

interface LinkFooterProps {
  title: string;
}

export default function LinkFooter(props: LinkFooterProps) {
  const { title } = props;
  return (
    <li className="py-1">
      <Link href="/">
        <a className="text-decoration-none text-muted a-teal">{title}</a>
      </Link>
    </li>
  );
}
