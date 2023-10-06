import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index() {
    return (
        <div className="flex flex-col items-center">
            <img src="./images/Coachemma.se.png" alt="Logotype Coachemma.se" width={300} className="py-10"></img>
            <div className="border-t border-solid border-indigo-900 w-full">
                <p className="text-lg text-center">Turn fear into strength, dreams into reality</p>
            </div>
            <div className="bg-hero h-80 lg:h-96 w-full bg-cover bg-center p-24"></div>
            <article>
                <div className="flex flex-col lg:flex-row border-solid border-[1.5px] border-black m-10 shadow-lg">
                    <div className="lg:w-1/2 p-10">
                        <h1 className="font-bold">About Me</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic autem? Reiciendis 
                            veniam ex commodi rerum pariatur, in aliquid amet laudantium 
                            consectetur quidem hic fugit fuga voluptas at modi delectus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maiores beatae molestias reprehenderit fugit laboriosam quas repellat 
                            sapiente iusto consequatur rerum ea, amet quia, dignissimos illum. Neque itaque nesciunt reiciendis.
                        </p>
                    </div>
                    <div className="lg:w-1/2 p-10">
                        <img src="./images/Coachemma.se.png" alt="Logotype Coachemma.se"></img>
                    </div>
                </div>
            </article>
            <article>
                <div className="p-10">
                    <h1 className="font-bold">Contact Me</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic autem? Reiciendis 
                        veniam ex commodi rerum pariatur, in aliquid amet laudantium 
                        consectetur quidem hic fugit fuga voluptas at modi delectus?
                    </p>
                    <div className="flex space-x-8 mt-2">
                        <div className="flex flex-col justify-center">
                            <p className="font-medium- mb-1">Email</p>
                            <FontAwesomeIcon className="hover:animate-bounce" icon={faEnvelope} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="font-medium mb-1">Facebook</p>
                            <FontAwesomeIcon className="hover:animate-bounce" icon={faFacebook} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="font-medium mb-1">Instagram</p>
                            <FontAwesomeIcon className="hover:animate-bounce" icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}