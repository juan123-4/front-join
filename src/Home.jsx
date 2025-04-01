import { Link } from "react-router-dom";


const Home = ({data}) => {
  return (
    <>
      <h2>lista de datos</h2>
      <ul>
        {data.map(ayuda=>(
          <li key={ayuda._id}>
            <Link to={`/${ayuda._id}`}>{ayuda.title}</Link>

          </li>
        ))}
      </ul>
    </>
  )
};

export default Home;
