import CreateUser from "../features/users/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center">
      <h1 className="mb-8 p-4 text-2xl font-bold text-yellow-600">
        The best pizza.
        <br />
        <span className="text-stone-700">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
