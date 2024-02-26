import { useEffect, useState } from "react";

const getAge = (): number => {
  const birthday = new Date("2002-01-27T00:00:00");
  var today = new Date();
  var thisYear = 0;
  if (today.getMonth() < birthday.getMonth()) {
      thisYear = 1;
  } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
      thisYear = 1;
  }
  var age = today.getFullYear() - birthday.getFullYear() - thisYear;
  return age;
}

export default function AboutMe() {
  const [fadeTransition, setFadeTransition] = useState<NodeJS.Timeout | null>(
    null
  );
  const [fadeState, setFadeState] = useState<String>("fade-out");
  const [age, setAge] = useState<number>(22);

  useEffect(() => {
    setAge(getAge());
    const timeout = setTimeout(() => {
      setFadeTransition(null);
      setFadeState("fade-in");
    }, 2000);

    if (fadeTransition) {
      clearTimeout(fadeTransition);
    }

    setFadeState("fade-out");
    setFadeTransition(timeout);
  }, []);

  return (
    <div
      className={`fade-wrapper ${fadeState} max-w-4xl mt-32 text-left`}
      style={{ transitionDuration: `${1000}ms` }}
    >
      <h2 className="w-full text-left border-b-2">All About Me:</h2>

      <div className="px-4 pt-8">
        <img
          src={require('../assets/img/thumbsup.PNG').default}
          className="w-38 h-48 rounded-2xl shadow-xl m-auto mb-8 md:mb-0 md:float-left md:mr-8"
        />
        <div className="m-auto md:ml-8">
          <p>
            I am a {age} year old final year student studying Computer Science at
            Queen Mary University of London. I have been interested in
            programming since getting my first laptop at age 14, and started
            programming for iOS at 16/17.
          </p>
          <p className="pt-2">
            For the past few years I have been a fullstack (React + .NET Core) developer at Mountain Warehouse,
            though I have been focused on iOS development in Swift and SwiftUI for personal projects.
            In the past, I have made and published Android applications written in Java to the Google Play Store,
            and have developed several APIs and projects in C#/.Net Core, as well as been involved in several
            modding communities for games.
          </p>
          <div className="my-12 ">
            <a
              href="https://github.com/Tom-Knighton"
              target="_blank"
              className="gitbutton mt-12"
            >
              My GitHub
            </a>
            <a
              href="mailto:tomk@tomk.online"
              target="_blank"
              className="appStoreButton mt-12 ml-8"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
