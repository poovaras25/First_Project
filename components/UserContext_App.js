import UserDetails from './UserContext'
import HooksExample from './components/HooksExample'

function App() {
    const userDetails = {
        name :"Deva", age:24, address:"Chennai"

    }

    return(

        <>
        
        <>
        <UserDetails.Provider value={userDetails}>
        <HooksExample/>
        </UserDetails.Provider>
        </>
    </>

    );
}

export default App;