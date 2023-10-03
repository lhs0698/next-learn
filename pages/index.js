import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import Head from "next/head";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS"/>
        <meta 
          property="og:description"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

// SSG 방식의 getStaticProps 개발모드에서는 별 차이 없음
export const getStaticProps = async () => {
  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴");

  return {
    props: {
      countries,
    },
  };
};

// SSR 방식의 getServerSideProps
// export const getServerSideProps = async () => {
//   //SSR을 위해 서버측에서 컴포넌트에게 전달할 데이터를 설정하는 함수
//   // getServerSideProps 함수는 페이지 역할을 하는 Home 컴포넌트에게 데이터를 props 형태로 넘겨주기위한 역할을 하는 함수
//   // API 호출 코드가 필요함
//   const countries = await fetchCountries();
//   console.log("countries 데이터 불러옴")

//   return {
//     props: {
//       countries,
//     },
//   };
// };
