# The Parts I Never Said

A small, responsive storybook built with plain HTML, CSS, and JavaScript. It is ready to publish as a static GitHub Pages site.

## Files

- `index.html` contains the book and audio player.
- `style.css` contains the responsive book, page-turn, and rose-bloom styling.
- `script.js` contains the story pages and interactions.
- `The_Rose.mp3` is the background music. Keep it in the same folder as `index.html`.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository. A public repository works with GitHub Pages on all plans.
2. Upload `index.html`, `style.css`, `script.js`, `The_Rose.mp3`, and this `README.md` to the repository's top level. You can use **Add file > Upload files** on GitHub, or push the folder with Git.
3. Open the repository's **Settings** tab.
4. In the left menu, open **Pages** under **Code and automation**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your publishing branch (usually `main`) and the `/(root)` folder, then click **Save**.
7. Wait for the Pages deployment to finish. The Pages screen will show the published URL, usually `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.
8. Open that URL on your phone and tap **Tap to open our story**. The tap starts the music because mobile browsers require a user gesture before audio can play.

If you replace the song, keep the filename `The_Rose.mp3`, or update the `src` on the `<audio>` element in `index.html`. Make sure you have permission to publish the audio file.
