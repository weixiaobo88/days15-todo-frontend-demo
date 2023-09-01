export default function HelpPage() {
  console.log(process.env);
  return (
    <div>
      <h1> This is Help Page </h1>
      <p>ENV: {process.env.REACT_APP_ENV}</p>
      <p>BASE_URL: {process.env.REACT_APP_BASE_URL}</p>
    </div>
  );
}
