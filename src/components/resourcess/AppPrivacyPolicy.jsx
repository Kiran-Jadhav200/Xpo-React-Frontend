import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const AppPrivacyPolicy = () => {
  const { appName } = useParams();
  const formattedAppName = appName
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <motion.div
      className="px-5 py-10 min-h-screen bg-[#0e0c1b] text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-2">
            {formattedAppName} Privacy Policy
          </h1>
          
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Collecting Personal Information
          </h2>
          <p className="mb-4">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              There are many variations of passages of Lorem Ipsum available.
            </li>
            <li>Iusto odio dignissimos ducimus qui blanditiis.</li>
            <li>Praesentium voluptatum deleniti atque.</li>
            <li>Quas molestias excepturi sint occaecati.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Sharing Personal Information
          </h2>
          <p className="mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default AppPrivacyPolicy;
