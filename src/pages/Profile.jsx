import Card from "../components/Cards";
const Profile = () => {
  const favCard = JSON.parse(localStorage.getItem("favCard"));
  return (
    <main className="min-h-screen">
      <div className="flex w-full h-screen flex-col items-center justify-center gap-20">
        <h1 className="text-slate-50 hover:-translate-y-20 duration-700 relative z-20 text-center text-[8rem]">
          My Favorite
        </h1>
        <Card
          src={favCard ? favCard.src : ""}
          name={favCard ? favCard.name : ""}
          description={favCard ? favCard.description : ""}
        />
      </div>
    </main>
  );
};

export default Profile;
