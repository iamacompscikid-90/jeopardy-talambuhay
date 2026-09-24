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
    },
    {
        points: 100,
        question:
            'Which country\'s flag is this?',
        imgSrc: "france-flag.jpg",
        answer: 'France',
    },
    {
        points: 400,
        question:
            'What square / plaza of Manhattan is this?',
            imgSrc: "union-square.jpg",
        answer: 'Union Square',
    },
    {
        points: 300,
        question: 'What does the Greek word "Philosophia" mean?',
        imgSrc: "athena.jpeg",
        answer: 'Love of wisdom',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 300,
            question: 'What is the second fastest moving object in the Olympics?',
            imgSrc: "fencing.jpg",
            answer: 'A Fencing Blade',
        },
        {
            points: 200,
            question:
                'What genre of music originated in the Bronx in the 1970s?',
            imgSrc: "hiphop.jpg",
            answer: 'Hip Hop',
        },
        {
            points: 400,
            question: 'What famous math problem is this?',
            imgSrc: "collatzconjecture.jpg",
            answer: 'Collatz Conjecture',
        },
        {
            points: 100,
            question:
                'In what sport do drivers race in these types of cars?',
            imgSrc:
                "formula1.jpg",
            answer: 'Formula 1',
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
    },
    {
        points: 400,
        question: 
        'What job field contains roughly 25% of the US workforce?',
        imgSrc: "stem.jpg",
        answer: 'STEM',

    },
    {
        points: 300,
        question: 'The Largest Walt Disney World Resort resides in this city.',
        imgSrc: "orland.jpg",
        answer: 'Orlando, Florida',
    },{
        points: 100,
        question: 'In what city can you use this card?',
        imgSrc: "OMNY.jpeg",
        answer: 'New York City',
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