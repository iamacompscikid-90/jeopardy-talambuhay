import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question: 'Where was pizza invented?',
        imgSrc: "pizza-pic.jpeg",
        answer: 'Italy',
        //hmmmm i wonder...
    },
    {
        points: 100,
        question:
            'Which country\'s flag is this?',
        imgSrc: "france-flag.jpg",
        answer: 'France',
        //went there when i was 11
    },
    {
        points: 400,
        question:
            'What square / plaza of Manhattan is this?',
            imgSrc: "union-square.jpg",
        answer: 'Union Square',
        //born and lived here for 1st 6 years of my life
    },
    {
        points: 300,
        question: 'What does the Greek word "Philosophia" mean?',
        imgSrc: "athena.jpeg",
        answer: 'Love of wisdom',
        //sophia = sofia (where i got my name)
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 300,
            question: 'What is the second fastest moving object in the Olympics?',
            imgSrc: "fencing.jpg",
            answer: 'A Fencing Blade',
            //i fence
        },
        {
            points: 200,
            question:
                'What genre of music originated in the Bronx in the 1970s?',
            imgSrc: "hiphop.jpg",
            answer: 'Hip Hop',
            //i listen to hip hop 
        },
        {
            points: 400,
            question: 'What famous math problem is this?',
            imgSrc: "collatzconjecture.jpg",
            answer: 'Collatz Conjecture',
            //i love math
        },
        {
            points: 100,
            question:
                'In what sport do drivers race in these types of cars?',
            imgSrc:
                "formula1.jpg",
            answer: 'Formula 1',
            //watch f1 w my dad
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question:
            'Which famous activist made global headlines when she was only 15 years old?',
        imgSrc:
            "greta.jpeg",
        answer: 'Greta Thunberg',
        //gretas my sister going to go to be a highschooler
    },
    {
        points: 400,
        question: 
        'What job field contains roughly 25% of the US workforce?',
        imgSrc: "stem.jpg",
        answer: 'STEM',
        // like stem

    },
    {
        points: 300,
        question: 'The Largest Walt Disney World Resort resides in this city.',
        imgSrc: "orland.jpg",
        answer: 'Orlando, Florida',
        //going to orlando for tournament in 2 weeks
    },{
        points: 100,
        question: 'In what city can you use this card?',
        imgSrc: "OMNY.jpeg",
        answer: 'New York City',
        //plan to stay in the city
    }
]);


const categories = [
    {
        title: 'Sofia Cafagna\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Sofia Cafagna\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Sofia Cafagna\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}