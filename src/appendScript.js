export const appendScript = (source) => {
  const script = document.createElement("script");
  script.src = source;
  console.log(script);
  script.async = true;
  document.body.appendChild(script);
};
