import Landing from "./landing"
import About from "./about"
import Hero from "./hero"
import one from '../../assets/images/placeholder-images/one.png'
import two from '../../assets/images/placeholder-images/two.png'
import three from '../../assets/images/placeholder-images/three.png'
import four from '../../assets/images/placeholder-images/four.png'
import photo1 from '../../assets/images/placeholder-images/photography1.png'
import photo2 from '../../assets/images/placeholder-images/photography2.png'

export default function HomePage() {

    const specialNotices = ["Recruitment for 2028 batch has began."]
    const onJoin = (e) => {
        e.preventDefault();
        // redirect to the most recent recruitment blog post
    }

    const learnMore = (e) => {
        e.preventDefault();
        // redirect to the learn more page
    }

    return (
        <div>
            <Landing onJoin={onJoin} specialNotices={specialNotices} />
            {/* Refer to tailwind.config.js for container, container-px and container-px-md variables */}
            <div className="max-w-container px-container-px py-5 mx-auto flex flex-col md:py-7 md:px-container-px-md">
                <About clubGallery={clubGallery} stats={stats} learnMore={learnMore} />
                <Hero photos={topPhotos} />
            </div>
        </div >
    )
}

const clubGallery = [
    two,
    one,
    two,
    three,
    four,
    two
]
const topPhotos = [
    {
        id: 1,
        image: photo1,
        title: "Beautiful Hills.",
        location: "Hills",
        date: "2024-01-01",
        photographer: "ABCD",
        link: "Link",
    },
    {
        id: 2,
        image: photo2,
        title: "Mountain View",
        location: "Mountain",
        date: "2024-01-01",
        photographer: "EFGH",
        link: "Link",
    },
]

const stats = [
    {
        title: "Sony World Photography Winners.",
        value: 12
    },
    {
        title: "Taylor Wessing Potrait Prizes",
        value: 3
    },
    {
        title: "Events hosted in the last year.",
        value: 10
    },
    {
        title: "Club Members",
        value: 74
    },
]