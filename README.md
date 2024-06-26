**OVERVIEW**

Welcome! I made this page for the purpose of (1) compiling all the small projects I'm doing while learning ReactJS, while (2) setting it up to be my interactive web dev portfolio.

I take inspiration from this project made by DustinBrett (https://github.com/DustinBrett/daedalOS). As a novice developer, I made this simple implementation of how a desktop environment works. In the future, more apps and features will be added as I go.

**DESKTOP ENVIRONMENT**

I want it to look like a desktop environment that is loosely based on how my current setup looks.

- Ubuntu
- GNOME
- Adwaita Theme
- Dash-to-Panel
- ArcMenu
- Conky Linux

Tools:

- react-icons: Icons and logos
- framer-motion: To animate pop-ups, toggle minimize and maximize, opening and closing of windows.

**WINDOWS MANAGER**

Position and dimension of window persists when maximized or minimized.

- react-rnd: To make windows resizable and draggable

**TASKBAR**

For the taskbar, I prefer the Windows setup as it is simple and it doesn't occupy much screen height. Uses basic conditional rendering.

- Start Menu: ArcMenu look
- Active Windows (uses react-use-draggable-scroll)
- Taskbar settings
- Weather app
- Time and Date
- Show Desktop Icon

**TIME AND DATE**

Uses basic useState hooks. Comes with react-calendar which does nothing but to imitate a time and date popup.

Tools:

- react-calendar: A basic calendar

**WELCOME SCREEN**

Contains introductory notes and quick links for when the client/interviewer just want to see my resume/social media.

**CALCULATOR**

Followed this excellent tutorial by **Web Dev Simplified** (https://youtu.be/DgRrrOt0Vr8?si=oYyhMYfNP6C6XiZj). Built without any Math libraries, just useReducer Hook.

**CONKY LINUX**

Or Rainmeter if you will. Uses basic styling.

- Time and Date display: _Uses local machine time and date_
- Random advice display: _Fetch API (https://api.adviceslip.com/advice)_
- Weather display: _Fetch API (https://openweathermap.org/api)_
- GitHub stats: _Trying to find a way to get my stats_

  https://github.com/anuraghazra/github-readme-stats

- Codewars stats: _This as well_

  https://github.com/DiniFarb/codewars_readme_stats?tab=readme-ov-file
  https://github.r2v.ch/codewars?user=adrian.taay

**MUSIC PLAYER**

Followed this tutorial https://www.youtube.com/watch?v=KIwgfJF_gEk. Will refactor this in the future where both the music player and Conky music display are in sync.

**SHUT DOWN OPTIONS**

Imitates the next thing you see after shutting down. Black screen that displays lines that indicate a process that has turned off

_\* Deconfiguring network interfaces... [OK]_

_\* Unmounting temporary filesystems... [OK]_

I didn't know that I can't use setTimeout inside Array.map the way I want it to behave.

Listens for the ENTER keypress only after all lines are rendered.

**LOCK SCREEN**

Imitates the lock screen. Only unlocks by pressing Enter

- Unsplash API

**RATE MY WORK**

- Star rating from freeCodeCamp YouTube channel https://youtu.be/5ZdHfJVAY-s?si=4HAWdmQnuB_Oadob&t=2722
- Will use Nodemailer in the future.

**WEATHER APP**

- Fetches data from https://openweathermap.org/api
- Uses weather icons https://www.npmjs.com/package/weather-react-icons

**TO-DO APP**

- A basic to-do app that segregates pending tasks and completed tasks
- Added timestamps using MomentJS.

**TERMINAL**

- Will only imitate appearance for now.
- Inspired by nasan016's terminal portfolio https://webshellx.vercel.app/, and ForrestKnight's https://fkcodes.com/
- Will probably continue building this only after getting hired, during weekends.

**MATHEL MEMORY**

JS game I made during bootcamp

**KEYBOARD TESTER**
