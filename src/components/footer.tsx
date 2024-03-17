import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="px-6 py-6">
        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 flex">
            © Copyright 2024. All Rights Reserved.{" "}
            <span className="flex text-gray-300 pl-2 font-light">
              By @ENWUFT
            </span>
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <Link
              href="/teams"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="teams"
            >
              {" "}
              Teams{" "}
            </Link>

            <Link
              href="/privacy"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Privacy"
            >
              {" "}
              Privacy{" "}
            </Link>
            <Link
              href="/post"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Privacy"
            >
              {" "}
              Post{" "}
            </Link>
            <Link
              href="/Q&A"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Privacy"
            >
              {" "}
              Q&A{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
