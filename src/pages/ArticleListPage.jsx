import { Link } from "react-router-dom";
import articles from "./article-content";

const ArticlesListPage = () => {
  return (
    <div className=" min-h-screen p-4 mt-10 md:mt-20">
      <h1 className="text-center text-3xl font-bold text-gray-800 my-10">
        Articles
      </h1>
      {/* Adjust the container to wrap items and center them */}
      <div className="flex flex-wrap justify-center items-start">
        {articles.map((article) => (
          <Link
            key={article.name}
            to={`/articles/${article.name}`}
            className="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 bg-white rounded-lg shadow-md p-6 m-4 hover:bg-gray-50 transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {article.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {article.content[0].substring(0, 100)}...
            </p>
            <hr className="my-4" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesListPage;
