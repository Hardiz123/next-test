async function getData(url) {
  return fetch("https://diy-api.classplusapp.com/v1/published/landing-page", {
    headers: {
      "website-url": url,
    },
    next : {
        revalidate : 30
    }
  })

}
let first = 0;

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
    let data1 = "https://dev1.imperfectoclickz.com/wlp/course-zruwmx-1695891211689";
    let data2 = "https://www.ravitthukralclasses.com/wlp/linear-algebra"


    first = first === 0 ? 1 : 0;   
    const data = await getData(first === 0 ? data1 : data2);

  const jsonData = await data.json();
  return <div>{jsonData.data.page.title}</div>;
}
