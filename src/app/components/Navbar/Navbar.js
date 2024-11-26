import Link from "next/link";

const NavBar = () => {
  return(
    <nav className="flex justify-evenly flex-wrap p-3 pt-6 pb-6 min-h-32 items-center bg-orange-100 text-3xl text-amber-700">
      <ul className="flex justify-evenly w-2/5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="ml-3">
          <Link href="/article">Article</Link>
        </li>
      </ul>
    
      <ul className="flex justify-evenly w-3/5">   
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li className="ml-3">
          <Link href="/resource">Resource Center</Link>
        </li>
        <li className="ml-3">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;