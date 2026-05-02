import Header from '../../assets/components/Header'
import MyMap from '../../assets/components/MyMap'


function Shelter(){
    return (
        <>
        <div className = "relative w-full h-screen"> 
            <div className="absolute inset-0 z-0">

        <MyMap type="shelter"/>
             </div>
          <div className = "absolute top-0 left-0 w-full z-50">
        <Header page = "Shelter Resources"/>
          </div>

        </div>
        </>

    )
};

export default Shelter;