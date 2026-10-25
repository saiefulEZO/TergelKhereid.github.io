# Tergel Khereid: personal website (Herbarium design)

This folder is the whole website. Nothing needs installing.

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | Every word and link on the site, and the name of the photo | **Yes**, this is the only file you change |
| `images/` | The pictures (`photo.jpg`) | Add or replace pictures here |
| `index.html` | The design | No |
| `.nojekyll` | Tells GitHub to show the files exactly as they are (hidden on a Mac) | No |

## See it on your computer

Double-click `index.html` and it opens in your browser. Fonts need an internet connection.
A yellow box may appear listing things still to fill in. Only you see it, because the page is opened from your computer. Visitors to the real site never see it.

## Change the text on GitHub

1. Open this repository on github.com and click `content.js`.
2. Click the pencil icon (**Edit this file**) at the top right of the file.
3. Change the words between the double quotes. Keep the quotes and the comma at the end of the line.
4. Click **Commit changes**, then **Commit changes** again in the box that pops up.
5. The live site updates in 1 to 2 minutes. If you still see the old text, force a refresh: **Ctrl + Shift + R** on Windows, **Cmd + Shift + R** on a Mac.

The top of `content.js` explains the rules in plain English. The short version:

- Text goes between straight double quotes `"like this"`. Curly quotes `“ ”` break the file.
- Most lines end with a comma.
- Anything in `[square brackets]` is a placeholder that still needs real text. The page shows it with a dashed outline.
- An empty `""` hides that line. An empty list `[]` hides the whole section.

## Change the photo

Keep the file name `photo.jpg` and the page picks it up automatically.

1. Click the `images` folder, then **Add file > Upload files**.
2. Drop in the new picture, named exactly `photo.jpg` (lowercase).
3. Click **Commit changes**.

A portrait picture, a bit taller than it is wide, fits best.

## The moving diagram under Research

The mast cell diagram is drawn by `index.html`. Its words are in `content.js` under `study`: the title, the seven steps, and the steps for the **With fennel seed extract** button. Keep the seven steps in the same order, because each one matches a part of the animation. To hide the diagram, write `steps: [],`.

If the `content.js` on GitHub doesn't have a `study` part yet, the page uses the words built into `index.html`, so the diagram still shows. You only need the new `study` part if you want to change those words.

## If something goes wrong

- **A red box at the top of the page** means `content.js` has a typo. Visitors still see the site, using a copy of the text built into the page. On the live site, the box tells you which line to look at. Check that line and the one above it, usually for a missing comma or quote.
- **To undo a change:** open `content.js` on GitHub and click **History** to see earlier versions. The quickest fix is usually to correct the typo and commit again.
- **The photo is missing:** the file name must match exactly, capitals included.
