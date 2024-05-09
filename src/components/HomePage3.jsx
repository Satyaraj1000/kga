import React from 'react'

const HomePage3 = () => {
    return (
        <div>
            <div className="">
                <div className="w-full h-full flex flex-col lg:flex-row-reverse items-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-2 lg:space-x-4">
                    <div className="w-full h-1/2 lg:h-full lg:w-1/3 text-3xl font-bold">
                        <div className="grid-flow-col space-y-2 md:space-y-4 md:p-6">
                            <div className="space-x-2 font-bold text-xl md:text-2xl xl:text-4xl">
                                <h1>UNLOCK THE POWER OF A</h1>
                                <h1 className="text-blue">GLOBAL CURRICULUM</h1>
                            </div>
                            <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                                <h2 className="text-pink font-bold">Tranform your child’s learning journey!</h2>
                            </div>
                            <div className="text-sm md:text-lg">
                                <p>
                                    Our learning spaces are designed to bring the best of the IGCSE curriculum
                                    to your child. We emphasize on hands-on activities, creativity, and problem solving skills as essential parts of everyday lessons. Basic academic concepts
                                    are introduced through storytelling, painting, crafts, dance, music, and
                                    sports, helping children understand each concept - not memorize it.
                                    Our approach goes beyond traditional education. It prepares students for
                                    the challenges and opportunities of tomorrow, while nurturing them to
                                    become compassionate leaders in our interconnected world.
                                </p>
                            </div>
                            <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                                <h2 className="text-blue font-bold">HOLISTIC</h2>
                                <h2>GROWTH</h2>
                            </div>
                            <div className="text-sm md:text-lg">
                                <p>
                                    At Kapol Global Academy (IGCSE), we understand every child is unique.
                                    Whether your child aspires to be a scientist, artist, or entrepreneur, our
                                    diverse range of subjects and innovative learning processes will guide him
                                    or her to achieve and excel. Not just that, our aim is also to nurture virtues
                                    such as integrity, responsibility, and empathy in our students and through
                                    values-based learning, we equip them for success in academics and in all
                                    aspects of life.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/2 lg:h-full lg:w-1/2">
                        <img className="flex w-full object-fill" src="src/assets/KGA-1.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage3
