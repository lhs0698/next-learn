import { fetchSearchResults } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  // 1. 검색 결과 api 호출
  // 2. Props return
  const { q } = context.query;

  let countries = [];

  if (q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: {
      countries,
    },
  };
};
