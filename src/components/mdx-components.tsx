import Link from "next/link";

export const components = {
  // Override <p>
  p: (props: any) => <p {...props} />,

  // Override <div>
  div: (props: any) => <div {...props} />,

  // Override <li>
  li: (props: any) => <li {...props} />,

  // Override <Link>
  Link: (props: any) => <Link {...props} />,
};


