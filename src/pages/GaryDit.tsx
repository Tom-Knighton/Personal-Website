import React from "react";

const GaryDitPage = () => {


    return <div className="max-w-4xl m-auto">
        <h1>GaryDit</h1>

        <span>GaryDit is an upcoming third-party Reddit client written natively for iOS in SwiftUI.</span>
        <br/><br/>
        <span>Reddit has made several unhelpful and antagonistic changes to their API recently, but as GaryDit is a hobby app that will not be commercial, it will be able to use their API for free, within the 100 requests per minute limit.
            To this end, GaryDit will require users to be logged into Reddit.
        </span>
        <br/><br/>
        <span>GaryDit will feature enhanced video controls, swipe actions, no ads, an amazing media viewer, and a far better Reddit experience than the official app</span>
        <br/><br/>

        <span>As GaryDit is a hobby app, it will release when it is done :)</span>

        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 20}}>
            <img src={require(`../assets/img/gdit_1.PNG`).default} width={300} height="auto"/>
            <img src={require(`../assets/img/gdit_2.PNG`).default} width={300} height="auto"/>
            <img src={require(`../assets/img/gdit_3.PNG`).default} width={300} height="auto"/>
        </div>

    </div>
};

export default GaryDitPage;