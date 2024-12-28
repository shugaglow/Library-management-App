import AddBooks from "./components/AddBooks"



function Home() {
    return (
    <div className="home-wrapper">
        <div><h1>Welcome to Library app.</h1></div>
        <AddBooks/>
    </div>
    )
}

export default Home