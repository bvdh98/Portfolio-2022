import React from "react";

export const WebProjectCollection = [
  {
    id: 0,
    title: "Iverson Club",
    image: "iverson.png",
    description: (
      <p>
        Iverson Club is a fake e-commerce store which sells Allen Iverson
        basketball shoes. FireBase is used to handle user authentication and
        storing the shoe data. Once the user logs in, the shoes are populated
        from FireBase onto the website. The user can add shoes to their shopping
        cart, and then purchase them using PayPal. The most challenging aspect
        of this project was figuring out how to implement a shopping cart
        system. After doing some research, I discovered that the best way to
        implement it would be by using the context pattern and reducer pattern.
        This was a pattern, I wasn't familiar with and it took sometime to
        learn. Part of the reducer pattern are dispatches, which are like
        methods used to signal the parent component to update it's state. A
        dispatch is used to get the user's cart data after they login, when a
        new shoe is added to the cart, when a new user logins in, when a user
        logs out, and when a user logs out.
      </p>
    ),
    status: "complete",
    technologies: "React.JS and Firebase",
    date: "November 2021 - January 2022",
    projectLink: "https://iversonclub.herokuapp.com/login",
    gitHubLink: "https://github.com/bvdh98/IversonClub"
  },
  {
    id: 1,
    title: "Youth Environmental Challenge",
    image: "yecdashboard.png",
    description: (
      <p>
        This project was sponsored by{" "}
        <a href="https://www.drizzlesociety.org/">
          Drizzle Environmental Society
        </a>. In this project we worked with Darcy Green, a founder of Drizzle
        Environmental Society, to improve the Youth Environmental Challenge
        website, a site which challenges youth to take on environmental
        challenges in their community, such as participating in a community
        clean up. Once a user has completed a challenge, they can submit a photo
        as evidence. After an admin verifies the photo, the user will receive
        points, which can be used to claim awards. My group and I refactored the
        login and registration, implemented the photo verification system, and
        improved the front-end. I focused on making the front end more visually
        appealing and responsive
      </p>
    ),
    status: "complete",
    technologies: "LAMP and JavaScript",
    date: "September - December 2020",
    projectLink: "https://youthenvironmentalchallenge.com/login.php",
    gitHubLink: "https://github.com/yecuser/DrizzleYEC"
  },
  {
    id: 2,
    title: "OurFootprint Carbon Calculator",
    image: "carbonfootprint.png",
    description: (
      <p>
        This project was sponsored by Canadian V-Chip Design Inc. A group of
        four others and I worked with Tim Collings, CEO of Canadian V-Chip
        Design Inc, to build a carbon calculator.Unlike most carbon calculators,
        this app doesn't require extensive manual input from users. Users upload
        csv files of their BC Hydro and Fortis bills and enter data of their car
        commutes, to then receive their carbon footprint and a comparison to the
        average BC household. Built with: AngularJS, Django, and PostgreSQL
      </p>
    ),
    status: "complete",
    technologies: "AngularJS, Django, and PostgreSQL",
    date: "April - May 2020",
    projectLink: "https://ourfootprint.herokuapp.com/",
    gitHubLink: "https://github.com/bvdh98/OurFootprintCA"
  }
];

export const gameProjects = [
  {
    id: 0,
    title: "First Person Shooter",
    image: "fps.gif",
    description: (
      <div>
        <p>
          A simple FPS game which helped me build upon the Unity foundations.
          The objective is straightforward: kill all the enemies in each stage
          to advance to the next one.
        </p>
        <p className="features_para">Features:</p>
        <ul>
          <li>Enemies that shoot and follow you</li>
          <li>Ammo and health crates</li>
          <li>Pooled bullets</li>
          <li>Buildings and obstacles</li>
        </ul>
      </div>
    ),
    status: "complete",
    technologies: "Unity",
    date: "January 2021",
    gitHubLink:"https://github.com/bvdh98/Unity-FPS"
  },
  {
    id: 1,
    title: "Angry Birds",
    image: "angryBirds.gif",
    description: (
      <div>
        <p>A beginner project that helped me learn the foundations of Unity.</p>
        <p className="features_para">Features:</p>
        <ul>
          <li>Different levels</li>
          <li>Enemies and wood blocks</li>
          <li>LineRenderer aim feature</li>
        </ul>
      </div>
    ),
    status: "complete",
    technologies: "Unity",
    date: "December 2020",
    gitHubLink: "https://github.com/bvdh98/AngryBirds"
  }
];
