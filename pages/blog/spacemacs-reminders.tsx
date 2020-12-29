import Header from "../../components/Header";

const Post = () => {
  return (
    <div className="p-8 font-mono">
      <div className="mx-auto md:w-2/3 w-full">
        <Header displayStyle="other" />
      </div>
      <h1 className="mt-4 text-4xl">Spacemacs Reminders</h1>
      <p className="text-sm bg-black text-white inline px-1 py-1">
        Updated December 27, 2020
      </p>
      <main className="mt-6">
        <p className="text-base my-2">
          <ul className="text-base list-disc ml-4 mt-2">
            <li className="mb-2">
              Open file from Treemacs to a specific buffer:{" "}
              <Code>o a a &lt;buffer&gt;</Code>
            </li>
            <li className="mb-2">
              Find text under cursor (or visually) project-wide:{" "}
              <Code>SPC *</Code>
            </li>
            <li className="mb-2">
              Open last search: <Code>SPC s l</Code>
            </li>
            <li className="mb-2">
              Copy/paste into register 'a': <Code>"ay</Code> or <Code>"ap</Code>
            </li>
            <li className="mb-2">
              Show yank-ring: <Code>SPC r y</Code>
            </li>
            <li className="mb-2">
              Search in directory: <Code>SPC s f</Code>
            </li>
            <li className="mb-2">
              Set/go-to mark 'a': <Code>ma</Code> or <Code>`a</Code>
            </li>
            <li className="mb-2">
              See project-wide errors: <Code>, g e</Code>
            </li>
          </ul>
        </p>
      </main>
    </div>
  );
};

const Code = ({ children }: { children: string }) => {
  return (
    <span className="bg-codeBg text-codeFg inline-block px-1">{children}</span>
  );
};

export default Post;
