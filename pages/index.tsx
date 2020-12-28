import Header from "../components/Header";

const Index = () => {
  return (
    <div className="p-8 font-mono">
      <div className="mb-2">
        <h1 className="text-4xl bg-black text-white inline px-2 py-1">
          Sid Raval
        </h1>
      </div>
      <Header displayStyle={"homepage"} />
    </div>
  );
};

export default Index;
