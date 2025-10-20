import axios from "axios";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify"; // to safely render HTML

const Tabel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getJsonData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/reddit/r/reactjs.json");
      const posts = res.data.data.children.map((child) => child.data);
      setData(posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJsonData();
  }, []);

  const cleanRedditHtml = (html) => {
  if (!html) return "";

  // remove Reddit comment wrappers and outer div
  let cleaned = html
    .replace(/<!-- SC_OFF -->/g, "")
    .replace(/<!-- SC_ON -->/g, "")
    .replace(/^<div class="md">/, "")
    .replace(/<\/div>$/, "");

  // decode HTML entities like &#39; -> '
  const txt = document.createElement("textarea");
  txt.innerHTML = cleaned;
  cleaned = txt.value;

  return cleaned;
};

  return (
    <div style={{padding:".5rem"}} className="min-h-screen bg-gradient-to-b from-zinc-900 to-gray-800 text-white flex flex-col items-center py-10 px-6">
      <h1 className="text-2xl border-b  border-spacing-1 font-bold mb-8 text-blue-400 animate-pulse uppercase">
        reactjs Top Posts
      </h1>
      <br />

      {loading && (
        <p className="text-gray-400 text-xl animate-pulse">Loading posts...</p>
      )}

      {!loading && (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
          style={{ minHeight: "720px", maxWidth: "1280px" }}
        >
          {data.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800/80 border cursor-pointer border-gray-700 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
            >
              <div style={{padding:"1rem"}} className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-blue-300 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="h-2"></p>
                 {post.selftext_html && (
  <div
    className="text-gray-300 text-sm mb-4 overflow-hidden line-clamp-4"
   dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(cleanRedditHtml(post.selftext_html)),
    }}
  ></div>
)}

                </div>
  <br/>
                <div style={{padding:".5rem"}} className="mt-auto flex justify-between items-center pt-3 border-t border-gray-700">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    Visit Post ↗
                  </a>
                  <span className="text-sm min-w-12 min-h-6 flex justify-center items-center bg-blue-600/40 px-3 py-1 rounded-full">
                    ⭐ {post.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabel;
