export const appendScript = () => {
  const script = document.createElement("script");
  script.src = "./scroll-down.js";
  console.log(script);
  script.async = true;
  document.body.appendChild(script);
};
