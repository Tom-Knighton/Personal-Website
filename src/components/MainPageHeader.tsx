import { useEffect, useState } from 'react';
// import StatusCard from './StatusCard';

function MainPageHeader() {

    const [fadeTransition, setFadeTransition] = useState<NodeJS.Timeout | null>(null);
    const [fadeState, setFadeState] = useState<String>("fade-out");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeTransition(null);
            setFadeState('fade-in');
        }, 1000);

        if (fadeTransition) {
            clearTimeout(fadeTransition);
        }

        setFadeState('fade-out');
        setFadeTransition(timeout);
    }, []);

  return (
    <div className={`fade-wrapper ${fadeState} max-w-4xl m-auto`} style={{ transitionDuration: `${1000}ms` }}>
      <h1>Hi, I'm Tom 👋</h1>
      <span>I am currently a final year student of Computer Science at Queen Mary University of London. I work mainly with Swift for iOS development and C#, but have experience with other OOP languages.
          I have published an iOS and an Android app to their respective app stores, and have completed freelance projects for individuals. I have also completed a 'year in industry'
          as an intern developer at Mountain Warehouse, working in multiple teams across backend code, their frontend site as well as React Native apps. I now work for Mountain Warehouse in a full stack developer role.
      </span>
      {/* <StatusCard status="I am currently looking for a Graduate Software Developer role commencing in 2024."/> */}
    </div>
  );
}

export default MainPageHeader;
