import { useEffect, useState } from "react";

export default function AboutMe() {
  const [fadeTransition, setFadeTransition] = useState<NodeJS.Timeout | null>(
    null
  );
  const [fadeState, setFadeState] = useState<String>("fade-out");

  useEffect(() => {
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
          src="/assets/img/thumbsup.PNG"
          className="w-38 h-48 rounded-2xl shadow-xl m-auto mb-8 md:mb-0 md:float-left md:mr-8"
        />
        <div className="m-auto md:ml-8">
          <p>
            I am a 19 year old second year student studying Computer Science at
            Queen Mary University of London. I have been interested in
            programming since getting my first laptop at age 14, and started
            programming for iOS at 16/17.
          </p>
          <p className="pt-2">
            For the past few years I have focused on iOS development with Swift,
            creating complete mobile apps. I have also worked with Java and C#,
            I made and published an Android application written in Java to the
            Google Play Store in 2017, and have developed several APIs for my
            projects with ASP.NET core in C#, as well as modifications for
            gaming communities.
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
              href="mailto:tomknighton@icloud.com"
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
