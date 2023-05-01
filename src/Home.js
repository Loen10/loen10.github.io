const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      {
        [
          <p key="1">Hi</p>,
          <p key="2">How are you?</p>
        ]
      }
    </div>
  );
}
 
export default Home;