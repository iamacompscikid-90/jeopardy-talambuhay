import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Where was pizza invented',
        imgSrc: "pizza-pic.jpeg",
        answer: 'Italy',
    },
    {
        points: 200,
        question:
            'Which country\'s flag is this?',
        imgSrc: "france-flag.jpg",
        answer: 'France',
    },
    {
        points: 300,
        question:
            'What square / plaza of Manhattan is this?',
            imgSrc: "union-square.jpg",
        answer: 'Union Square',
    },
    {
        points: 400,
        question: 'What does Philosophia mean?',
        imgSrc: "athena.jpeg",
        answer: 'Love of wisdom',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question: 'What is the second fastest moving objecct in the Olympics?',
            imgSrc: "fencing.jpg",
            answer: 'Tip of a Fencing Blade',
        },
        {
            points: 100,
            question:
                'What genre of music originated in the Bronx in the 1970s?',
            imgSrc: "hiphop.jpg",
            answer: 'Hip Hop & Rap',
        },
        {
            points: 200,
            question: 'What famous math problem is this?',
            imgSrc: "collatzconjecture.jpg",
            answer: 'Collatz Conjecture',
        },
        {
            points: 300,
            question:
                'What type of car is this?',
            imgSrc:
                "formula1.jpg",
            answer: 'Formula 1',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This famous activist captured the attention of the world when she was only 15 years old?',
        imgSrc:
            "greta.jpeg",
        answer: 'Greta Thunberg',
    },
    {
        points: 200,
        question: 
        'According to the US National Science Foundation, roughly 25% of the US workforce is in this field',
        imgSrc: "stem.jpg",
        answer: 'STEM',

    },
    {
        points: 300,
        question: 'The Largest Walt Disney World Resort resides in this city.',
        imgSrc: "orlando.jpg",
        answer: 'Orlando, Florida',
    },{
        points: 400,
        question: 'Where can you use this card?',
        imgSrc: "omny.jpg",
        answer: 'New York City Subway',
    }
]);


const categories = [
    {
        title: 'Sofia Cafagna\'s Past',
        questions: pastQuestions
    },
    {
        title: `Sofia Cafagna's Present`,
        questions: presentQuestions
    },
    {
        title: "Sofia Cafagna's Future",
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