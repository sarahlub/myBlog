import React, { useState } from "react";

export default function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editedComment, setEditedComment] = useState("");

const handleAddComment = () => {
    if (newComment.trim() !== "") {
        setComments([...comments, newComment]);
        setNewComment("");
    }
};

const handleEditComment = (index) => {
    setEditIndex(index);
    setEditedComment(comments[index]);
};

const handleSaveEdit = () => {
    if (editedComment.trim() !== "") {
        const updatedComments = [...comments];
        updatedComments[editIndex] = editedComment;
        setComments(updatedComments);
        setEditIndex(null);
    }
};

const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
};

return (
    <div className="commentSection">
        <h2>Comments</h2>
        <div className="commentInput">
        <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add</button>
        </div>
            <div className="comments">
        {comments.map((comment, index) => (
            <div key={index} className="comment">
            {editIndex === index ? (
            <>
                <input
                    type="text"
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
            </>
            ) : (
            <>
                {comment}
                <div className="commentButtons">
                    <button onClick={() => handleEditComment(index)}>Edit</button>
                    <button onClick={() => handleDeleteComment(index)}>Delete</button>
                </div>
            </>
            )}
        </div>
        ))}
        </div>
    </div>
);
}
