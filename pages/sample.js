import Link from 'next/link'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const { data, error } = useSwr(
    `/api/sample`,
    fetcher
  )

  if(error) {
      return (
          <div>
              Error Occured
          </div>
      )
  }

  if(data) {
      if(data.x) {
          return (
              <div>
                  {data.x}
                  <Link href={`/sample/${data.x}`}>
                      <h1>Hello</h1>
                  </Link>
              </div>
          )
      }
      else {
          return (
              <div>
                  Loading
              </div>
          )
      }
  } else {
      return (
          <div>
              Loading
          </div>
      )
  }
}