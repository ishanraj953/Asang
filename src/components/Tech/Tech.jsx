import TechStack from "../Glassmorphism/TechStack";

const logos = [
  {
    name: "React",
    img: "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
    url: "https://react.dev/"
  },
  {
    name: "Vite",
    img: "https://www.webgis.dev/media/e584a6cb-246d-4e24-ab9e-80abedfdf34d.jpg",
    url: "https://vite.dev/"
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "Node.js",
    img: "https://miro.medium.com/v2/resize:fit:931/1*HrPTW91qmdXQ0z0o3yU2ug.png",
    url: "https://nodejs.org"
  },
  {
    name: "Express",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*q6b32yNdlpyQjDZlAc1QEg.png",
    url: "https://expressjs.com"
  },
  {
    name: "MongoDB",
    img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/mongodb-logo-freelogovectors.net_.png",
    url: "https://www.mongodb.com"
  },
  {
    name: "Tailwind CSS",
    img: "https://logowik.com/content/uploads/images/tailwind-css7675.logowik.com.webp",
    url: "https://tailwindcss.com"
  },
  {
    name: "Material UI",
    img: "https://www.vectorlogo.zone/logos/mui/mui-icon.svg",
    url: "https://mui.com"
  },
  {
    name: "JWT",
    img: "https://devpro.kr/assets/img/title/jwt_logo_black.png",
    url: "https://www.jwt.io/"
  }
];


export default function Tech() {



  return (
    <section id="tech" className="bg-black w-full py-24 min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-cyan-500">
          Technologies
        </h2>

        <div className="mt-16 grid grid-cols-5 gap-10 place-items-center">
          {
            logos.map((logo) => (
                <TechStack link={logo.url} img={logo.img}/>
            ))
          }
        </div>

      </div>

    </section>
  );
}
