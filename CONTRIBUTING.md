# Working together on Click n Laugh

This guide is for a team that is still learning Git. You do **not** need to be an
expert — just follow the steps and ask when you get stuck.

## The three rules

1. **Never work directly on `main`.** Create your own branch and open a Pull Request (PR).
2. **Only edit the files listed for your part.** In particular, only the integrator
   edits `src/App.jsx`.
3. **Update `main` before you start each day** (step 1 below). This keeps conflicts small.

## One-time setup

1. Ask the repo owner (`mickepollak`) to invite your GitHub account.
2. Accept the invitation (check your email or github.com/notifications).
3. Install [Node.js](https://nodejs.org) (version 20 or newer) and Git.
4. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/mickepollak/click-n-laugh.git
   cd click-n-laugh
   npm install
   npm run dev
   ```

5. Open the URL Vite prints (usually http://localhost:5173).

> Prefer buttons over the terminal? [GitHub Desktop](https://desktop.github.com) or
> the Source Control panel in VS Code can do everything below. The commands are here
> so you can learn what is happening.

## Your part

| Part | Branch | Files you own | What it does |
|------|--------|---------------|--------------|
| 1 | `feat/game-core` | `src/components/ReactionTest.jsx`, `src/components/ReactionTest.css` | The click game and measuring the time |
| 2 | `feat/results-stats` | `src/components/ResultsPanel.jsx`, `src/components/ResultsPanel.css`, `src/hooks/useStats.js` | Last / best / average results |
| 3 | `feat/theme` | `src/index.css`, `src/App.css` | Dark theme, layout, responsive styling |
| 4 | `feat/settings` | `src/components/Settings.jsx`, `src/components/Settings.css`, `src/hooks/useSettings.js` | Delay range and "reset stats" |

The four GitHub Issues ("Part 1 – ..." etc.) contain the details for each part.
Comment on your issue if anything is unclear.

## The agreed interface

We all code against the same props, so the pieces fit together when we merge:

```jsx
// App.jsx (integrator only)
const [results, setResults] = useState([])
const [settings, setSettings] = useState({ minDelayMs: 1000, maxDelayMs: 4000 })

<ReactionTest
  minDelayMs={settings.minDelayMs}
  maxDelayMs={settings.maxDelayMs}
  onResult={(timeMs) => setResults((r) => [...r, timeMs])}
/>

<ResultsPanel results={results} />

<Settings
  settings={settings}
  onSettingsChange={setSettings}
  onReset={() => setResults([])}
/>
```

- `results` is an array of numbers (milliseconds).
- `ReactionTest` calls `onResult(timeMs)` **once** after each successful click.
  It does **not** call it for "Too early!".
- Give new props sensible defaults (for example `minDelayMs = 1000`) so your
  component still works on its own.
- Shared CSS class names: `.app`, `.reaction-tester`, `.results-panel`, `.settings`.

## Daily workflow

### 1. Update `main`

```bash
git switch main
git pull
```

### 2. Switch to your branch

```bash
git fetch            # only needed the first time
git switch feat/game-core
```

Replace `feat/game-core` with your branch from the table.

### 3. Make a small change and test it

```bash
npm run dev
```

Save your file, look at the browser, repeat. Keep changes focused on your part.

### 4. Commit

```bash
git status           # check which files changed
git add src/components/ReactionTest.jsx
git commit -m "Add random delay to reaction test"
```

Commit small and often. Write the message as "what I did", not "changes".

### 5. Push

```bash
git push
```

### 6. Open a Pull Request

On GitHub you will see a **Compare & pull request** button for your branch.
Click it, fill in the template, and press **Create pull request**.

Ask one teammate to review it. When it is approved, the integrator merges it and
deletes the branch.

## Staying up to date

If someone else's PR was merged while you were working:

```bash
git switch main
git pull
git switch feat/your-branch
git merge main
```

Resolve any conflicts (see below), then `git push`.

## Merge conflicts (don't panic)

A conflict means two people changed the same lines. Git marks them like this:

```
<<<<<<< HEAD
your code
=======
their code
>>>>>>> main
```

Open the file, keep the correct code, delete the `<<<<<<<`, `=======`, and
`>>>>>>>` lines, save, then:

```bash
git add <file>
git commit
```

If you are unsure which version is right, **stop and ask in the group chat**.
Never delete files to make a conflict "go away".

## If something goes wrong

- Undo your last commit but keep the changes: `git reset --soft HEAD~1`
- See what you changed: `git diff` and `git status`
- Throw away changes to one file: `git restore <file>` (this is permanent)
- **Never run `git push --force`.** Ask for help instead.
- You can always clone the repo again in a new folder as a last resort. Your work
  on GitHub is not lost.

## Small glossary

| Word | Meaning |
|------|---------|
| repo | The project folder tracked by Git |
| branch | Your own line of work, separate from `main` |
| commit | A saved snapshot of your changes |
| push | Upload your commits to GitHub |
| pull | Download other people's commits |
| PR (Pull Request) | "Please review and merge my branch" |
| merge | Combine a branch into `main` |

## Only the integrator does this

- Edit `src/App.jsx` and wire the four parts together.
- Merge PRs into `main`.
- In an emergency, bypass branch protection. Otherwise, use a PR like everyone else.
