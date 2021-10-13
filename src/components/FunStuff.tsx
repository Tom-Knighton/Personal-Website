import { useEffect, useState } from "react";

export default function FunStuff() {
  const [fadeTransition, setFadeTransition] = useState<NodeJS.Timeout | null>(
    null
  );
  const [fadeState, setFadeState] = useState<String>("fade-out");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeTransition(null);
      setFadeState("fade-in");
    }, 2300);

    if (fadeTransition) {
      clearTimeout(fadeTransition);
    }

    setFadeState("fade-out");
    setFadeTransition(timeout);
  }, []);

  return (
    <div
      className={`fade-wrapper ${fadeState} max-w-4xl my-20 text-center`}
      style={{ transitionDuration: `${1000}ms` }}
    >
      <h2 className="w-full text-left border-b-2">More Fun Stuff 🎉:</h2>
      <div className="bg-darkgraylight rounded-lg shadow-xl m-5 p-3">
        <h3>My Interests:</h3>
        <ul>
          <li>Dogs! 🐶</li>
          <li>Skiing ❄️</li>
          <li>Reading 📚</li>
          <li>Learning new frameworks 🎒</li>
          <li>Helping out 😄</li>
        </ul>
      </div>

      <div className="bg-darkgraylight rounded-lg shadow-xl m-5 p-3">
        <h3>What i'm listening to:</h3>
        <svg className="w-full md:w-1/2 m-auto">
          <image
            href="https://spotify-readme-tom-knighton.vercel.app/api?theme=dark"
            className="m-auto"
          />
        </svg>
      </div>
    </div>
  );
}
