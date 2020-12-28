import Header from "../../components/Header";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <div className="p-8 font-mono">
      <div className="mx-auto md:w-2/3 w-full">
        <Header displayStyle="other" />
      </div>
      <h1 className="mt-4 text-4xl">Blog Posts</h1>
      <main className="mt-2 text-xl">
        <ol className="list-decimal list-inside">
          <li className="mb-6 sm:mb-4">
            <Link href="/blog/spacemacs-reminders">
              <a className="border-b-2 border-hotblue">Spacemacs Reminders</a>
            </Link>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              12/27/20
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <Link href="/blog/prettier-ruby-spacemacs">
              <a className="border-b-2 border-hotblue">
                Using Prettier for Ruby in spacemacs
              </a>
            </Link>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              4/14/20
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <Link href="/blog/dotnet-core-background-tasks-f-sharp">
              <a className="border-b-2 border-hotblue">
                .NET Core Background Tasks in F#
              </a>
            </Link>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              2/25/20
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/executables-can-understand-their-output-destination"
            >
              Executables can Introspect their Output Destination
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              12/6/19
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/javascript-type-systems-are-not-linters"
            >
              JavaScript Type Checkers are More than Linters
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              11/21/19
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/grouping-elements-for-better-accessibility-on-ios"
            >
              Grouping Elements for Better Accessibility on iOS
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              3/12/19
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/waiting-for-file-write-completion-on-ios"
            >
              Waiting for File Write Completion on iOS
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              1/24/19
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/static-types-in-medias-res"
            >
              Static Types In Medias Res
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              10/8/18
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/the-many-uses-of-org-mode"
            >
              The Many Uses of Org Mode
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              5/9/18
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/introducing-swish-1-0-protocol-based-networking-for-ios"
            >
              Swish 1.0: Protocol Based Networking for iOS
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              6/2/16
            </span>
          </li>
          <li className="mb-6 sm:mb-4">
            <a
              className="border-b-2 border-hotblue"
              href="https://thoughtbot.com/blog/a-rest-api-with-haskell-and-snap"
            >
              A REST API with Haskell and Snap
            </a>
            <span className="text-sm bg-black text-white p-1 hidden sm:inline ml-2">
              3/4/15
            </span>
          </li>
        </ol>
      </main>
    </div>
  );
};

export default BlogPosts;
