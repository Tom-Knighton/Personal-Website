import { useEffect, useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

export default function Projects() {
  const [fadeTransition, setFadeTransition] = useState<NodeJS.Timeout | null>(
    null
  );
  const [fadeState, setFadeState] = useState<String>("fade-out");

  const projects: Project[] = [
    {
      projectName: "Go Travel - iOS",
      projectDesc:
        "Go Travel is an iOS application I am currently developing in SwiftUI, and a full backend in .NET Core. Go Travel is part of my final year project at university," +
        " and aims to encourage usage of public transport across the UK. The application has several unique features across the full stack, and leverages some of the newest technologies both on iOS and" +
        " on the backend, such as Macros in Swift, new MapKit features, keyed services in dotnet and much more. The application also has a social element, where users can compete to travel the most, and make" +
        " update posts to their followers.",
      projectImageNames: ["garygopromo.png"],
      projectTags: [
        "Swift",
        "SwiftUI 5.0",
        "MapKit",
        "Codable",
        "URLSession",
        ".NET Core 8",
        "Auth 0",
      ],
      isPrivate: true
    },
    {
      projectName: "Gary Portal - iOS",
      projectDesc:
        "Gary Portal is a social media iOS application, written entirely in SwiftUI and some UIKit modules. Gary Portal allows you to post updates on your life" +
        " to your feed, chat with friends and pray to increase your points.\n\nThe live version of the app is built mainly in SwiftUI 2.0, and utilises some key iOS frameworks" +
        " like AVFoundation. The app also interacts with a SignalR websocket, and an external API.\n\nI am currently in the process of updating this app to" +
        " utilise features introduced in SwiftUI 3.0, and add new features such as chat replies, reactions and more.",
      projectImageNames: ["gppromo.png"],
      projectTags: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "AVFoundation",
        "Codable",
        "URLSession",
        "Keychain",
        "Notifications",
      ],
      githubLink: "https://github.com/Tom-Knighton/Gary-Portal-iOS",
      appStoreLink: "https://apps.apple.com/kw/app/gary-portal/id1346147876",
    },
    {
      projectName: "Gary Portal API - .NET Core (C#)",
      projectDesc:
        "As a companion to the Gary Portal app above, I have created and maintain my own API to run the backend of the app. The system here is created using Microsoft's " +
        ".NET core platform, and the EntityFramework module, a Database-Management System. The API also includes SignalR/websockset hubs, which allow clients to" +
        " communicate in real time with the API\n\nThe API is secured with a JWT + Refresh token system, and only allows users to access relevant endpoints for relevant entites," +
        " so no-one can maliciously access the API.",
      projectImageNames: ["dotnetpromo.png"],
      projectTags: [
        "C#",
        ".NET Core",
        "Linux",
        "Entity Framework",
        "MySql",
        "SignalR",
      ],
      githubLink: "https://github.com/Tom-Knighton/Gary-Portal-API",
    },
    {
      projectName: "FiveM communities 'frameworks' - C# / Vue3",
      projectDesc:
        "I have worked closely with two large gaming communities as a software developer. For both communities, I created unique 'frameworks' that expanded"+
        " the multiplayer experience to allow for each user to have multiple characters, each with different roles, cars, properties and more. \n\n"+
        "My work on the frameworks included all the backend API and database management (one in C# and the other in TypeORM), the frontend UI design in VueJs, "+
        "and the game logic in C#.\nWorking for these communities allowed me to experience loose work within a proper development team, responding to deadlines and"+
        " community feedback.",
      projectImageNames: ["osrp.jpg"],
      projectTags: [
        "C#",
        "Vue3",
        "HTML / CSS",
        "Client <-> Server Communication",
        "Game Logic",
      ],
    },
  ];

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
      className={`fade-wrapper ${fadeState} max-w-4xl mt-20 text-left`}
      style={{ transitionDuration: `${1000}ms` }}
    >
      <h2 className="w-full text-left border-b-2">Some of My Projects:</h2>

      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
