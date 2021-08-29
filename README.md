# dansusman.dev

Hi there! Welcome to the source code for my portfolio site. Have a look around to see how things work, if you please...


## Some Highlights to Check Out

1. Hover over my name at https://dansusman.dev and see the text change to "more about me." This little shortcut to the /about page is a clever use of Astro's partial hydration. Most of the page is statically generated, but I have opted into client-side rendering for specific components such as this.
2. Reload the page a few times and watch the accent color randomly generate. (Check out the favicon too, if you're on desktop).
  - subpoint here: Wow, did I learn the struggles of developing a custom favicon and supporting it across devices with this project. Who knew such a tiny photo could be such a massive pain!
3. Head over to https://dansusman.dev/about and check out the "Dan is currently..." section. This updates based on the time of day, day of the week, and time of year (school year or not). Completely unneccesary, I know, but kinda cool 😄.
4. Not sure if you noticed this, but the hand emoji (👋) waves hello when you first load on to https://dansusman.dev. The heart is also beating in the footer.
5. On the [about page](https://dansusman.dev/about), the last word of the first paragraph is a randomly generated synonym of "superb." This makes use of Astro's partial hydration as well, but more importantly works with the API from the [superb library](https://github.com/sindresorhus/superb).
