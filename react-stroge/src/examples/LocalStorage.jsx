const LocalStorageExample = () => {
    const fruitsArray = ["Apple", "Banana", "Coffee"]

    // Set item in local storage
    localStorage.setItem("username", "JohnDoe");
    localStorage.setItem("age", 55)
    localStorage.setItem("isMalaysian", true)

    localStorage.setItem('fruits', JSON.stringify(fruitsArray))

    // Try to get a non -existent item
    const nonExistentItem = localStorage.getItem("nonExistentKey");

    // localStorage.removeItem('username'); // Remove from localStroge

    //  localStorage.clear()

    // Get item from local storage
    const username = localStorage.getItem("username"); //String 
    const age = localStorage.getItem('age') //String 
    const isMalaysian = localStorage.getItem('isMalysian') //String
    const storedFruits = localStorage.getItem("fruits") //JSON string

    const convertedIntoArrayFruits = JSON.parse(storedFruits)
    console.log(storedFruits)
    console.log(convertedIntoArrayFruits)

    if(username == null){
        // Logic goes here if user is not logged in
    }

    console.log(age + 30)
    console.log(typeof(isMalaysian))

    return (
        <div>
            <ul>
                {convertedIntoArrayFruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                )
            )}
            </ul>
        </div>
    );
};

export default LocalStorageExample