import Header from "../components/Header";

const About = () => {
  return (
    <div className="p-8 font-mono ">
      <div className="mx-auto md:w-2/3 w-full">
        <Header displayStyle="other" />
      </div>
      <h1 className="mt-4 text-4xl">About</h1>
      <main className="mt-2 text-2xl lg:w-2/3">
        <h2 className="bg-black text-white inline px-2 py-1">Professional</h2>
        <p className="text-lg my-2">
          I'm an engineering leader with a broad technical skillset, primarily
          in full-stack web development and native iOS development. I enjoy
          functioning as an engineering manager and technical lead. I
          partciularly enjoy working closely with the product team to come up
          with solutions to business problems together.
        </p>
        <h2 className="bg-black text-white inline px-2 py-1">Personal</h2>
        <p className="text-lg my-2">
          Currently, I'm: reading{" "}
          <a
            href="https://en.wikipedia.org/wiki/The_Godfather_(novel)"
            className="border-b-2 border-hotblue"
          >
            The Godfather
          </a>
          , playing the classical guitar, skiing, and cooking{" "}
          <a
            href="https://foodviva.com/gujarati-recipes/"
            className="border-b-2 border-hotblue"
          >
            Gujarati food
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default About;
