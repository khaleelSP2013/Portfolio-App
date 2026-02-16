# Portfolio – React + TypeScript

A responsive single-page portfolio built with **React 18**, **TypeScript**, and **Vite**, with **React Router** for navigation.

## Menu / Pages

- **Home** – Hero and intro
- **About** – About me
- **Education** – Education timeline
- **Skill** – Skills and technologies
- **Projects** – Project cards (replace with your projects)
- **Contact** – Contact form and links

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- **Content**: Edit the text and links in `src/pages/*` and in `src/components/Layout.tsx` (e.g. logo, nav labels).
- **Education / Projects**: Update the arrays in `Education.tsx` and `Projects.tsx` with your real data.
- **Contact**: Wire the form in `Contact.tsx` to your backend or email service, and update the contact info.
- **Styles**: Colors and fonts are in `src/index.css` (`:root` variables). Layout and section styles are in each component’s `.css` file.

## Tech stack

- React 18, TypeScript
- Vite 5
- React Router 6
- CSS (no UI library); responsive breakpoints at 640px, 768px, 1024px
