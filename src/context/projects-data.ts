import { v4 as uuid4 } from "uuid";

export interface Ticket {
    id: string;
    title: string;
    description: string;
    tasks: string[];
}

export interface Project {
    name: string;
    id: string;
    board: { name: string; tickets: Ticket[] }[];
}

export const projectsData: Project[] = [
    {
        name: "hej",
        id: uuid4(),
        board: [
            {
                name: "Todo",
                tickets: [
                    {
                        title: "First ticket",
                        description: "issa ticket",
                        id: uuid4(),
                        tasks: ["task1", "task2"],
                    },
                ],
            },
            {
                name: "Doing",
                tickets: [
                    {
                        title: "third ticket",
                        description: "issa ticket",
                        id: uuid4(),
                        tasks: ["task1", "task2"],
                    },
                ],
            },
            {
                name: "Done",
                tickets: [
                    {
                        title: "second ticket",
                        description: "issa ticket",
                        id: uuid4(),
                        tasks: ["task1", "task2"],
                    },
                ],
            },
        ],
    },
];
