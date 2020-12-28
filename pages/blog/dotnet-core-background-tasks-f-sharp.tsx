import Header from "../../components/Header";

const Post = () => {
  return (
    <div className="p-2 sm:p-8 font-mono">
      <div className="mx-auto md:w-2/3 w-full">
        <Header displayStyle="other" />
      </div>
      <h1 className="mt-4 text-4xl">.NET Core Background Tasks in F#</h1>
      <p className="text-sm bg-black text-white inline px-1 py-1">
        February 25, 2020
      </p>
      <main className="mt-6 lg:w-2/3">
        <p className="text-base my-2">
          Currently, there is no way to generate a .NET Core Worker Service
          using F# as the language. The <Code>dotnet</Code> CLI does not expose
          the <Code>--language</Code> flag when running{" "}
          <Code>dotnet new worker</Code>.
        </p>
        <p className="mt-4">
          Microsoft provides several{" "}
          <a
            className="border-b-2 border-hotblue"
            href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-3.1"
          >
            examples of background workers
          </a>{" "}
          in C#; I've ported these examples to F#, and made the{" "}
          <a
            className="border-b-2 border-hotblue"
            href="https://github.com/sidraval/background-workers-in-fsharp"
          >
            code available on GitHub
          </a>
          .
        </p>
        <p className="mt-4">
          Since we can't generate a new worker service with F#, I created an F#
          console application with a dependency on{" "}
          <Code>Microsoft.Extensions.Hosting</Code>. I then build the{" "}
          <Code>IHost</Code> manually in the <Code>main</Code> function.
        </p>

        <p className="mt-4">
          I've tried to convert the imperative C# code to functional F# where it
          makes sense. Another liberty I took was converting as much{" "}
          <Code>Task</Code> based code into <Code>Async&lt;'a&gt;</Code>{" "}
          wherever possible. There is still some <Code>Task</Code>
          based code around the edges, because of the .NET Core APIs.
        </p>

        <p className="mt-4">
          I've done my best to write idiomatic F#; I'm new to the language, as
          well as to .NET Core, so pull requests against the repository are very
          welcome!
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
