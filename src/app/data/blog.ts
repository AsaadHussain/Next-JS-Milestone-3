
type BlogDataType = {
    [key: string]: {
        id: string;
        title: string;
        description: string;
        image: string;
        content: string;
    }[];
};

export const Blog_Data:BlogDataType = {
    "Technology": [
        {
            id: "1",
            title: "Artificial Inteligence",
            description: "This is a Blog about Artificial Inteligence",
            image: "/AI.webp",
            content: "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think, learn, and make decisions. It represents a transformative technology capable of analyzing vast amounts of data, recognizing patterns, and performing tasks with precision, often surpassing human capabilities in speed and accuracy.AI is categorized into two main types: Narrow AI, designed for specific tasks like language translation or facial recognition, and General AI, which aspires to replicate human cognitive abilities broadly.While General AI remains a theoretical goal, Narrow AI is already prevalent in daily life."
        },
        {
            id: "1.2",
            title: "Chat GPT",
            description: "This is a Blog about Chat GPT",
            image: "/chatGPT.webp",
            content: "ChatGPT is an AI language model developed by OpenAI that uses natural language processing to generate human-like text responses. It is designed to assist with various tasks, including answering questions, writing content, coding, and providing creative or technical support. It adapts to user input, making it a versatile tool for both casual and professional use."
        }
    ],
    "Sports": [
        {
            id: "2",
            title: "Football",
            description: "This is a Blog about Football",
            image: "/football.webp",
            content: "Football, is the world's most popular sport, played and loved by millions across the globe. It is a team sport where two teams of eleven players each compete to score goals by getting a ball into the opposing team’s net. Football is known for its simplicity, accessibility, and ability to unite people, transcending borders, cultures, and languages."
        }
    ],
    "Food": [
        {
            id: "3",
            title: "Italian Cusine",
            description: "This is a Blog about Italian Cusine",
            image: "/italian.webp",
            content: "Italian cuisine is one of the most beloved and celebrated culinary traditions in the world. Known for its simplicity, fresh ingredients, and rich flavors, it embodies the essence of &ldquo; la dolce vita &ldquo; – the sweet life. With its roots deeply embedded in regional traditions, Italian food is a perfect blend of culture, history, and passion."
        }
    ],
    "Travel": [
        {
            id: "4",
            title: "Europe Tour",
            description: "This is a Blog about Europe tour",
            image: "/europe.webp",
            content: "Europe is a treasure trove of history, culture, and natural beauty, making it one of the most sought-after destinations for travelers worldwide. With its diverse countries and regions, each offering a unique blend of attractions, Europe caters to all kinds of travelers, from history buffs and art lovers to adventure seekers and food enthusiasts."
        },
        {
            id: "4.2",
            title: "World Tour",
            description: "This is a Blog about World tour",
            image: "/worldTour.webp",
            content: "A world tour is an exciting journey that takes you across multiple countries and continents, offering the chance to explore diverse cultures, iconic landmarks, and breathtaking landscapes. It’s a unique opportunity to experience the beauty and diversity of the world, broaden your horizons, and create unforgettable memories. From bustling cities to serene nature escapes, a world tour promises adventure and discovery at every turn."
        }
    ]
}