import { useEffect, useState } from "react";
import Card from "../components/Cards";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [slideIn, setSlideIn] = useState(true);
  const [slideOut, setSlideOut] = useState(true);
  const [fadeOut, setfadeOut] = useState(true);

  useEffect(() => {
    const h1Interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 2000);
    }, 4500);

    return () => {
      clearInterval(h1Interval);
    };
  }, []);

  useEffect(() => {
    const twistedInterval = setInterval(() => {
      setSlideIn(false);
      setTimeout(() => setSlideIn(true), 2000);
    }, 4500);

    return () => {
      clearInterval(twistedInterval);
    };
  }, []);
  useEffect(() => {
    const interestingInterval = setInterval(() => {
      setSlideOut(false);
      setTimeout(() => setSlideOut(true), 2000);
    }, 4500);

    return () => {
      clearInterval(interestingInterval);
    };
  }, []);
  useEffect(() => {
    const jokeInterval = setInterval(() => {
      setfadeOut(false);
      setTimeout(() => setfadeOut(true), 2000);
    }, 4500);

    return () => {
      clearInterval(jokeInterval);
    };
  }, []);
  return (
    <>
      <main className="min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <h1
            style={{ animationDuration: "1s" }}
            className={`text-[5rem] max-sm:text-2xl text-amber-200 font-extrabold animate__animated ${
              fadeIn ? "animate__fadeInLeftBigg" : "animate__fadeOutLeftBigg"
            }`}
          >
            Funny Website
          </h1>
          <div className="writing-mode-vertical-lr text-right absolute left-[40%]">
            <div className="text-[8rem] max-sm:text-5xl text-slate-200 inline-block wicked">
              <p className="transform -rotate-90 hover:skew-x-12 inline-block">
                Wicked
              </p>
            </div>
          </div>
          <div className="absolute left-[30%]">
            <div
              style={{ animationDuration: "2s" }}
              className={`text-[6rem] max-sm:text-2xl text-lime-200 inline-block animate__animated ${
                slideIn ? "animate__slideOutUpp" : "animate__slideInDownn"
              }`}
            >
              <p className="transform rotate-180 inline-block hover:translate-x-6">
                Twisted
              </p>
            </div>
          </div>
          <p
            style={{ animationDuration: "0.7s" }}
            className={`hover:opacity-40 text-[5rem] max-sm:text-2xl transform scale-x-(-1) text-green-200 animate__animated ${
              slideOut ? "animate__slideOutDownn" : "animate__slideInUpp"
            }`}
          >
            Interesting....
          </p>
          <button
            style={{ animationDuration: "1.2s" }}
            className={`overflow-hidden h-auto w-auto text-4xl max-sm:text-xl font-semibold rounded-lg shadow-lg p-6 bg-amber-100 -bottom-20 text-center text-slate-900 relative z-10 animate__animated ${
              fadeOut ? "animate__fadeInDownBigg" : "animate__fadeOutUpBigg"
            }`}
          >
            Tell me a joke
          </button>
          <h1 className="absolute z-30 top-[250vh] text-[5rem] max-sm:text-xl m-3 font-extrabold text-slate-100">
            <span>Joke</span>
            <span className="animate-pulse inline-block">|</span>
          </h1>
        </div>

        <div className="min-h-screen w-full gap-4 items-center justify-center flex flex-wrap max-sm:flex-col">
          <Card
            src="/hackaton1/1.jpg"
            name="Nightshade"
            description="                NightShade is a fierce warrior, known for her agility and
                stealth. She is a skilled fighter who prefers to strike from the
                shadows, using her knowledge of the terrain to outmaneuver her
                enemies. Her reputation precedes her, and many fear the mere
                mention of her name. Despite her formidable skills, NightShade
                is a solitary figure, keeping her own counsel and never
                revealing her true motives."
          />
          <Card
            src="/hackaton1/2.jpg"
            name="Warcry"
            description="                Warcry is a fearsome knight who has risen from the dead to
                continue his quest for vengeance. He is a relentless fighter,
                driven by a single-minded determination to seek retribution
                against those who wronged him in life. Despite his undead
                status, Warcry possesses a supernatural agility and strength,
                making him a formidable opponent in battle. He is often seen
                leading his undead army into battle, his distinctive battle cry
                striking fear into the hearts of his enemies."
          />
          <Card
            src="/hackaton1/3.jpg"
            name="Grimshadow"
            description="                GrimShadow is a powerful and solitary dark witch, feared for her
                formidable magic. She lives deep in the forest and rarely uses
                her powers for personal gain. Those who seek her out must be
                cautious, for she is known to be unpredictable and dangerous to
                cross. GrimShadow is a shadowy figure, cloaked in darkness and
                mystery, and her true intentions are known only to herself."
          />
          <Card
            src="/hackaton1/4.jpg"
            name="Shadowstrike"
            description="                Shadowstrike is a deadly assassin with a reputation for being
                both swift and stylish. He is known for his impeccable manners
                and gentlemanly demeanor, which contrast with his deadly
                profession. Shadowstrike is a master of disguise and can blend
                into any crowd, making him difficult to detect. He is a precise
                and efficient killer, using his lightning-fast reflexes and
                sharp intellect to outmaneuver his targets. Despite his
                profession, Shadowstrike operates with a strict moral code,
                never accepting a contract that would harm innocent people"
          />
          <Card
            src="/hackaton1/5.jpg"
            name="Deathwhisper"
            description="                Deathwhisper is a mysterious and formidable soldier, with a
                reputation that spans across time and space. Little is known
                about his origins or his true identity, but he is rumored to
                have fought in some of the most significant battles in history,
                from ancient times to the modern era. Despite the passage of
                time, Deathwhisper remains a fierce warrior, with unparalleled
                skill and an unwavering determination to see his mission through
                to the end"
          />
          <Card
            src="/hackaton1/6.jpg"
            name="Bloodrage"
            description="                Bloodrage is a deadly fighter with a deceivingly cute exterior.
                She may appear innocent and sweet, but her petite frame belies
                her immense strength and ferocity in battle. Bloodrage is a
                master of close combat, using her agility and sharp reflexes to
                outmaneuver her opponents. She is also known for her cunning and
                resourcefulness, often devising creative strategies to take down
                her enemies. Despite her fearsome reputation, Bloodrage has a
                soft spot for animals and often goes out of her way to help
                them. She is a complex and intriguing figure, with a mix of
                adorable charm and deadly ferocity."
          />
          <Card
            src="/hackaton1/7.jpg"
            name="Shadowclaw"
            description="                Shadowclaw is a formidable creature, a hybrid of man and tiger
                with razor-sharp claws and unmatched agility. He is a solitary
                figure, preferring to keep to himself and avoid unnecessary
                conflict. Shadowclaw is a skilled hunter, using his keen senses
                and stealth to stalk his prey. He is a fierce protector of his
                territory, and those who threaten it do so at their own risk.
                Despite his ferocity, Shadowclaw has a deep respect for the
                natural world and strives to live in harmony with it. He is a
                creature of mystery and power, with an unwavering spirit and an
                unmatched skillset."
          />
          <Card
            src="/hackaton1/8.jpg"
            name="Darkfire"
            description="                Darkfire is a blood magician of immense power and darkness. She
                wields a formidable command over the forces of blood and
                shadows, using them to bend others to her will. Darkfire is a
                solitary figure, shrouded in mystery and rarely revealing her
                true intentions. She is feared by many for her dark powers,
                which can bring even the bravest warriors to their knees.
                Despite her fearsome reputation, Darkfire has a deep sense of
                loyalty to those she considers her own. She will stop at nothing
                to protect them, using her formidable powers to strike down any
                who would seek to harm them."
          />
        </div>
      </main>
      <div className="min-h-screen"></div>
    </>
  );
};

export default Home;
