const name = "Nicholas"
const element = (<div className="myDiv" style={{paddingTop: 10}}>
    <h1 id="my-head">This is my XML element</h1>
    <h2>Hi {name}</h2>
</div>)

// XML Bahaves like HTML, but if you want to use multiline, you have to use brackets
// ID can be declared as per HTML, but other are different class -> className, style -> style={{styleKey: value}}
// Above is an example
// You can also add variable into your XML by just using {} curly brackets

// Another reason why we use XML, is because we can recycle the elements.

const secondElement = (<div>
    {element}
</div>)

const AboutMe = () => {
    return (
        <div>
            <h2>About Me</h2>
            <p>Hello! My name is {name} and I'm a web developer</p>
        </div>
    );
};

export default AboutMe;