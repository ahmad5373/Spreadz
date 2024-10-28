import chris from "../../assets/chris.png";
import Container from "../../customComponents/Container.";


const Founder = () => {

    return (
  <section className="hidden lg:block bg-orange-150">
     <Container className='px-4 lg:px-10 xl1:px-20'>

  <div className="h-52">
    <div className="flex justify-between">
      <div className="flex flex-col justify-center ">
        <h2 className="base-font-heading text-3xl text-white">Chris, founder of spreadz, do you have a question?</h2>
        <h4 className="base-font text-2xl text-white">Frequently Asked Questions - Everything you need to know about Spreadz at a glance</h4>
      </div>
      <div><img src={chris} alt="Chris"></img></div>
    </div>
  </div>
     </Container>
</section>

    )
}
export default Founder