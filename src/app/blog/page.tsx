"use client";
import * as React from "react";
import Image from "next/image";
import { apiCall } from "@/components/helper/apiCall";
import { dataCategory } from "@/components/helper/dataCategory";
import { useRouter } from "next/navigation";

const Home: React.FunctionComponent = () => {
  const router = useRouter();
  const [articleList, setArticleList] = React.useState<any[]>([]);
  const [category] = React.useState<string[]>(["All", ...dataCategory]);
  const [filterCategory, setFilterCategory] = React.useState<string>("All");

  const getArticlesList = async () => {
    try {
      const { data } = await apiCall.get(
        "/articles?pageSize=100&sortBy=%60created%60%20desc"
      );
      setArticleList(data);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  React.useEffect(() => {
    getArticlesList();
  }, [filterCategory]);

  const printArticleList = () => {
    return articleList
      .filter((val) =>
        filterCategory === "All" ? true : val.category === filterCategory
      )
      .map((val: any) => {
        const imageUrl = val.thumbnail?.trim()
          ? val.thumbnail
          : "/default-image.jpg"; // fallback image jika tidak ada thumbnail

        return (
          <div
            key={val.objectId}
            className="h-72 items-center bg-white rounded-xl cursor-pointer pt-50"
            onClick={() => router.push(`/article/${val.title}`)}
          >
            <div className="relative h-36 w-full">
              <Image
                src={imageUrl}
                alt={val.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="w-full p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="border border-slate-500 rounded-full py-0.5 px-2 text-xs">
                  {val.category}
                </span>
              </div>
              <p className="font-bold md:text-sm lg:text-lg px-4 py-2">
                {val.title.slice(0, 55)}
              </p>
            </div>
          </div>
        );
      });
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <div className="relative h-[30rem] w-full">
          <Image
            src="/masjidagung.jpg"
            alt="Hero Image"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <div className="absolute bottom-0 right-0 w-full p-4 text-right bg-slate-200 bg-opacity-55">
            <p className="text-2xl md:text-4xl lg:text-5xl italic">
              {articleList[0]?.title || "Selamat Datang di Blog Travel"}
            </p>
          </div>
        </div>
      </section>

      {/* Filter + List Section */}
      <section id="article-list" className="space-y-8 mt-8 px-4 md:px-20">
        {/* Filter Kategori */}
        <div id="article-filter" className="w-full overflow-x-auto py-8">
          <ul className="flex gap-4">
            {category.map((val) => (
              <li key={val}>
                <span
                  className={`border ${
                    filterCategory === val
                      ? "bg-slate-500 text-white font-semibold"
                      : ""
                  } border-slate-500 rounded-full py-1 px-4 cursor-pointer`}
                  onClick={() => setFilterCategory(val)}
                >
                  {val}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* List Artikel */}
        <div className="w-full min-h-[60vh] md:grid md:grid-cols-3 xl:grid-cols-5 grid-rows-3 items-start gap-3 space-y-5 md:space-y-0">
          {printArticleList()}
        </div>
      </section>
    </main>
  );
};

export default Home;
