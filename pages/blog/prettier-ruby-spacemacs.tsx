import Header from "../../components/Header";
import SyntaxHighlighter from "react-syntax-highlighter";

const Post = () => {
  return (
    <div className="p-8 font-mono">
      <div className="mx-auto md:w-2/3 w-full">
        <Header displayStyle="other" />
      </div>
      <h1 className="mt-4 text-4xl">Prettier for Ruby in spacemacs</h1>
      <p className="text-sm bg-black text-white inline px-1 py-1">
        April 14, 2020
      </p>
      <main className="mt-6">
        <p>
          Currently, spacemacs'{" "}
          <a
            href="https://develop.spacemacs.org/layers/+lang/ruby/README.html"
            className="border-b-2 border-hotblue"
            target="_blank"
          >
            Ruby layer
          </a>{" "}
          does not support choosing a formatter, like e.g. the{" "}
          <a
            href="https://develop.spacemacs.org/layers/+lang/typescript/README.html"
            className="border-b-2 border-hotblue"
            target="_blank"
          >
            TypeScript layer
          </a>
          . I <em>love</em> being able to type code without thinking about
          formatting, hit <Code>:w</Code>, and watch my file beautify itself.
        </p>
        <p className="my-4">
          I've started using <Code>@prettier/plugin-ruby</Code> at work, and
          wanted the experience I get with my TypeScript code, with my Ruby
          code. To that end, I wrote my very first elisp!
        </p>
        <SyntaxHighlighter language="lisp">
          {`(defun ruby-prettier ()
  (interactive)
  (when (eq major-mode 'ruby-mode))
    (shell-command-to-string (format "yarn prettier --write %s" buffer-file-name))
    (revert-buffer :ignore-auto :noconfirm)))

(add-hook 'after-save-hook 'ruby-prettier)`}
        </SyntaxHighlighter>
        <p className="mt-4">
          For the time being, I've dumped this function into{" "}
          <Code>dotspacemacs/user-config</Code> and it works! There is a
          noticeable half-second pause while this formats my code, something I
          haven't noticed when using prettier with TypeScript files. I don't
          know why.
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
