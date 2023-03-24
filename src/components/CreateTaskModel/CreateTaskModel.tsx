import React, { useState } from "react";
import "./CreateTaskModel.scss";
import { X } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {
    toggleShowCreateTask: () => void;
};

export default function CreateTaskModel({ toggleShowCreateTask }: Props) {
    const { createTicket } = useBoardContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(0);
    const [subtasks, setSubtasks] = useState([""]);

    return (
        <div className="model-container">
            <div className="model-card">
                <div
                    className="model-close"
                    onClick={() => toggleShowCreateTask()}
                >
                    <X />
                </div>

                <h3 className="model-title">Create new ticket</h3>

                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="this is a title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    placeholder="this is a description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="status">Status</label>
                <select
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(parseInt(e.target.value))}
                >
                    <option value={0}>Todo</option>
                    <option value={1}>Doing</option>
                    <option value={2}>Done</option>
                </select>

                <label>Subtasks</label>
                {subtasks.map((task, index) => (
                    <div className="subtask-container">
                        <input
                            type="text"
                            placeholder="this is a title..."
                            onChange={(e) => {
                                subtasks[index] = e.target.value;
                                setSubtasks([...subtasks]);
                            }}
                            value={task}
                        />
                        <X
                            onClick={() => {
                                subtasks.splice(index, 1);
                                setSubtasks([...subtasks]);
                            }}
                        />
                    </div>
                ))}
                <button
                    className="btn"
                    onClick={() => setSubtasks([...subtasks, ""])}
                >
                    Add new task
                </button>

                <button
                    className="btn"
                    onClick={() => {
                        createTicket(
                            title,
                            description,
                            subtasks.filter((task) => task != ""),
                            status
                        );
                        toggleShowCreateTask();
                    }}
                    disabled={!title || !description}
                >
                    Create ticket
                </button>
            </div>
        </div>
    );
}
