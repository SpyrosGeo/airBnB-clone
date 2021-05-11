
import { sanityClient } from '../sanity'
const Home = ({properties}) => {
  console.log(properties)
  return (
    <>
    </>
  )
}




export const getServerSideProps = async()=>{
  //sanity syntax
  const  query = '*[_type=="property"]'
  const properties = await sanityClient.fetch(query)
  if (!properties.length) {
    return {
      props:{
        properties:[]
      },
    }
  } else {
    return {
      props:{
        properties
      }
    }
  }
}
export default Home;