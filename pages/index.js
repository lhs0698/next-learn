import { fetchCountries } from "@/api";

export default function Home({ countries }) {
  return (
    <div>
      {
        countries.map((country) => <div key={country.code}>{country.commonName}</div>)
      }
    </div>
  )
}

export const getServerSideProps = async () => {
  //SSR을 위해 서버측에서 컴포넌트에게 전달할 데이터를 설정하는 함수
  // getServerSideProps 함수는 페이지 역할을 하는 Home 컴포넌트에게 데이터를 props 형태로 넘겨주기위한 역할을 하는 함수
  // API 호출 코드가 필요함
  const countries = await fetchCountries();
  

  return {
    props: {
      countries,
    },
  };
};
