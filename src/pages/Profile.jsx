import Card from "../components/Cards";
const Profile = () => {
  const favCard = JSON.parse(localStorage.getItem("favCard"));
  return (
    <main className="min-h-screen">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-20">
        <h1 className="relative z-20 text-center text-[8rem] text-slate-50 duration-700 hover:-translate-y-20">
          My Favorite
        </h1>
        <Card
          src={favCard ? favCard.src : ""}
          name={favCard ? favCard.name : ""}
          description={favCard ? favCard.description : ""}
          color={favCard ? favCard.color : ""}
        />
      </div>
    </main>
  );
};

export default Profile;
