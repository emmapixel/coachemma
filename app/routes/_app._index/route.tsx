import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
                <div className="flex flex-col lg:flex-row lg:justify-between border-solid border-[1.5px] border-black m-10 shadow-lg">
                    <div className="lg:w-1/2 p-10">
                        <h1 className="font-bold mb-2.5">About me and this website</h1>
                        <p className="mb-5">
                            My name is Emma, I live in Sweden and I have a deep passion for personal growth, mind work and happy living. 
                            I believe that we all can turn our fears into strength so that we dare to make our dreams into reality,
                            and create the life we want to live. Because we only have one life so why should we just
                            continue the "normal life" when we can do so much more! When we can make sure that there is 
                            no regrets in the end of our lives.
                        </p>
                        <p className="mb-5">
                            In 2021 I went on to become a lifecoach to make sure I work on myself and on my life. 
                            It is an important job and I believe that everyone can benefit from taking some time
                            to reflect and work on improving their own. Right now I am offering free 
                            30 minutes coaching sessions. If you are interested scroll down to see how to contact me.
                        </p>
                        <p>
                            We live a fast and busy life and now we need the time to reflect more than ever.
                            I hope I hear from you. 
                        </p>
                        
                    </div>
                    <div className="p-10">
                        <img src="./images/Me.jpg" alt="A picture of me" width={450}></img>
                    </div>
                </div>
            </article>
            <article>
                <div className="p-10">
                    <h1 className="font-bold mb-2.5">Get in contact</h1>
                    <p className="mb-5">
                        If you want to book a free 30 minutes coaching session just send me an email, or a direct message 
                        on message on instagram or facebook. 
                    </p>
                    <p className="mb-5">
                        You deserve to take some time for yourself. Have an amazing day!
                    </p>
                    <div className="flex flex-col space-x-8 mt-2">
                        <div className="flex flex-col justify-center">
                            <p className="font-medium- mb-2.5">Email: coachemma.se@gmail.com</p>
                        </div>
                        <div className="flex space-x-8 mt-2">
                            <div className="flex flex-col justify-center">
                                <p className="font-medium mb-1">Facebook</p>
                                <a href="https://www.facebook.com/coachemma.se"><FontAwesomeIcon className="hover:animate-bounce" icon={faFacebook} /></a>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-medium mb-1">Instagram</p>
                                <a href="https://www.instagram.com/coachemma.se/"><FontAwesomeIcon className="hover:animate-bounce" icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}