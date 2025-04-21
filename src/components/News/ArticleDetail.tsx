import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

// ✅ Extract YouTube Video ID safely
const getYouTubeId = (url: string): string | null => {
  const match = url.match(/[?&]v=([^&#]+)/);
  return match ? match[1] : null;
};

// 🎥 **YouTube Embed Component**
interface YouTubeEmbedProps {
  videoId: string;
}
const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="570"
      src={`https://www.youtube.com/embed/${videoId}`}
      style={{ border: 0 }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
    />
  </div>
);

// 📰 **Article Interface**
interface Article {
  id: number;
  title: string;
  date: string;
  categories: string[];
  image: string;
  content: string;
  url: string;
  videoUrl: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "3 Best Password Manager Apps for Android",
    date: "14 September 2024",
    categories: ["Android", "Password Manager"],
    image:
      "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Orange%20And%20Purple%20Attractive%20YouTube%20T-5079852.png",
    content:
      "The Xproguard Password Manager is mentioned in the 3 Best Password Manager Apps for Android in 2024 by Kenta Pogo on YouTube.",
    url: "https://xproguard.com/news/f/3-best-password-manager-apps-for-android",
    videoUrl: "https://www.youtube.com/watch?v=_mSvOC8t2Wk", // Example video URL
  },
  {
    id: 2,
    title: "15 Best Free Firewall Apps For Android in 2024",
    date: "23 February 2024",
    categories: ["Android", "Firewall"],
    image:
      "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Firewall-apps-for-Android.jpg",
    content:
      "The Xproguard Firewall is mentioned in the 15 Best Firewall Apps for Android in 2024 by Amarnath Chakraborty at techviral.net.",
    url: "https://xproguard.com/news/f/15-best-free-firewall-apps-for-android-in-2024",
    videoUrl: "https://techviral.net/firewall-apps-for-android/", // Example video URL
  },
  {
    id: 3,
    title: "Top 15 Firewall Apps",
    date: "11 November 2023",
    categories: ["Android", "Firewall"],
    image:
      "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Yellow%20%26%20Orange%20Modern%20Marketing%20Courses%20YouTu.png",
    content:
      "The Xproguard Firewall is mentioned in the Top 15 Firewall Apps for Android by Rahul Verma at techdator.net.",
    url: "https://xproguard.com/news/f/top-15-firewall-apps",
    videoUrl: "https://www.youtube.com/watch?v=SZevssgADiU", // Unique video URL for article 3
  },
  {
    id: 4,
    title: "5 Best Firewall Apps to Secure Android Phones (2023)",
    date: "10 March 2023",
    categories: ["Android", "Firewall"],
    image:
      "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/best%20firewall.png",
    content:
      "The Xproguard Firewall is mentioned in the 5 Best Firewall Apps for Android by Cуɓσɾɡ at naijaknowhow.net.",
    url: "https://xproguard.com/news/f/5-best-firewall-apps-to-secure-android-phones-2023",
    videoUrl: "https://naijaknowhow.net/best-android-firewall-apps/", // Example video URL
  },
  {
    id: 5,
    title: "The 5 Best Firewall Apps to Secure Your Android Phone",
    date: "15 January 2022",
    categories: ["Android", "Firewall"],
    image:
      "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Firewall-Apps-For-Android%20(1).jpeg",
    content:
      "The Xproguard Firewall is mentioned in the 5 Best Firewall Apps for Android by Rishabh Chauhan at makeuseof.com.",
    url: "https://xproguard.com/news/f/the-5-best-firewall-apps-to-secure-your-android-phone",
    videoUrl: "https://www.makeuseof.com/best-android-firewall-apps/", // Example video URL
  },
];

function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || "0", 10);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <p className="text-red-500 text-center text-lg">❌ Article not found</p>;
  }

  // ✅ Extract YouTube ID only for valid YouTube links
  const videoId = getYouTubeId(article.videoUrl);

  return (
    <div className="container mx-auto p-6 text-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 px-8 pt-16">
        {/* 📝 **Left Section (Article Content)** */}
        <div className="md:col-span-2 sm:col-span-1">
          <article>
            <h1 className="text-3xl md:text-4xl font-extrabold">{article.title}</h1>
            <p className="mt-2 text-lg text-gray-400">
              {article.date} | {article.categories.join(", ")}
            </p>

            {/* 🖼️ **Render Video OR Image** */}
            {videoId ? (
              <YouTubeEmbed videoId={videoId} />
            ) : (
              <img src={article.image} alt={article.title} className="w-full h-auto mt-4 rounded-lg" />
            )}

            <div className="mt-6">{article.content}</div>
            <div className="mt-6">
              <p className="text-lg">For more details, check the link below:</p>
              <a
                href={article.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.videoUrl}
              </a>
            </div>

            {/* 📢 **Social Share Buttons** */}
            <div className="mt-6 flex space-x-4">
              <FacebookShareButton url={article.url}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={article.url}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </article>
        </div>

        {/* 📌 **Right Section (Recent Posts)** */}
        <div className="md:col-span-1 sm:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <div key={a.id} className="flex items-center space-x-4">
                <img src={a.image} alt={a.title} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <Link to={`/article/${a.id}`} className="text-lg font-medium text-blue-600 hover:underline">
                    {a.title}
                  </Link>
                  <p className="text-sm text-gray-400">{a.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
