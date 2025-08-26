import Link from 'next/link'

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/news-one">News One</Link>
          <Link href="/news/news-two">News two</Link>
          <Link href="/news/news-three">News three</Link>
        </li>
      </ul>
    </>
  )
}
