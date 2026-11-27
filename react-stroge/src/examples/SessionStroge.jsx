const sessionStrageExample = () => {
    const fruitsArray = ["Apple", "Banana", "Coffee"];

    // Set item in local storage
    sessionStrage.setItem("username", "JohnDoe");
    sessionStrage.setItem("age", 55);
    sessionStrage.setItem("isMalaysian", true);

    sessionStrage.setItem("fruits", JSON.stringify(fruitsArray));

    // Try to get a non -existent item
    const nonExistentItem = sessionStrage.getItem("nonExistentKey");

    sessionStrage.removeItem("username"); // Remove from localStroge

    sessionStrage.clear();

    // Get item from local storage
    const username = sessionStrage.getItem("username"); //String
    const age = sessionStrage.getItem("age"); //String
    const isMalaysian = sessionStrage.getItem("isMalysian"); //String
    const storedFruits = sessionStrage.getItem("fruits"); //JSON string

    const convertedIntoArrayFruits = JSON.parse(storedFruits);
    console.log(storedFruits);
    console.log(convertedIntoArrayFruits);

    if (username == null) {
        // Logic goes here if user is not logged in
    }

    console.log(age + 30);
    console.log(typeof isMalaysian);

    return (
        <div>
            <ul>
                {convertedIntoArrayFruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default sessionStrageExample;
