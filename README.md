**Overview**

I made this page for the purpose of (1) compiling all the small projects I'm doing while learning ReactJS, while (2) setting it up to be my interactive web dev portfolio.

I take inspiration from this project made by DustinBrett (https://github.com/DustinBrett/daedalOS). As a novice developer, I made this simple implementation of how a desktop environment works. In the future, more apps and features will be added as I go.

**Desktop Environment / Window Manager**

I want it to look like a desktop environment that is loosely based on how my current setup looks.

- Ubuntu 23.04
- GNOME
- Adwaita Theme
- Dash-to-Panel
- ArcMenu

Uses useReducer and useContext hooks to instantiate multiple <Window /> component. To make it draggable and resizable, I used the react-rnd npm package.

Minimizable - useReducer
Active Window - onClick and onDrag

**Taskbar**

For the taskbar, I prefer the Windows setup as it is simple and it doesn't occupy much screen height. Uses basic conditional rendering.

- Start Menu
- Active Windows
- Taskbar settings
- Weather app
- Time and Date
- Show Desktop Icon

**Time and Date**

Uses basic useState hooks. Comes with react-calendar which does nothing but to imitate a time and date popup.

**Welcome Screen**

Contains introductory notes and quick links for when the client/interviewer just want to see my resume/social media.

**Calculator**

Followed this excellent tutorial by Web Dev Simplified (https://youtu.be/DgRrrOt0Vr8?si=oYyhMYfNP6C6XiZj). Built without any Math libraries, just useReducer Hook.

**Conky Linux**

Or Rainmeter if you will. Uses basic styling.

Time and Date Display - refactored previous TimeDate.jsx to use useContext for both components to use one state.

**Future Apps and Features in mind right now:**

- Weather app
- PDF reader
- Spotiphy
- Desktop shortcuts
- Terminal
- Mathel Memory (JS game I made while in the bootcamp)

** For Conky **
Trying to find a way to get these stats onto my Conky setup.

- GitHub stats
  https://github.com/anuraghazra/github-readme-stats

- Codewars stats
  https://github.com/DiniFarb/codewars_readme_stats?tab=readme-ov-file
  https://github.r2v.ch/codewars?user=adrian.taay
