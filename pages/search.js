import React from "react"
import Head from "next/head"
import Header from "../components/Header"
import SearchResults from "../components/SearchResults"
import { API_KEY, CONTEXT_KEY } from "../keys"
import Response from "../Respone"
import { useRouter } from "next/router"

const Search = ({ results }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = false
  const startIndex = context.query.start || "0"

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())

  // Pass the results to the client after the server side render
  return {
    props: {
      results: data,
    },
  }
}
