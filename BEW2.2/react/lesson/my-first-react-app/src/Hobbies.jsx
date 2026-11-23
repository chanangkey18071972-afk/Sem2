const Hobbies = () => {
    const hobbies = ["Volleyball", "Rock Climbing", "Basketball", "Hacking"]
    const noobHobbiesXML = (
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>
    )
    const proHobbiesXML = (
        <ul>
            {
                hobbies.map((hobby, index) => <li key={index}>{hobby}
                </li>)
            }
        </ul>
    )
    return proHobbiesXML
}
export default Hobbies