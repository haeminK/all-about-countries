import { useSubmit, useNavigation } from 'react-router-dom';
import { useState } from 'react';

import classes from './CommentForm.module.css';
import { formatDateTime } from '../utils/utils';

const CommentForm = () => {
    const submit = useSubmit();
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isCommentTouched, setIsCommentTouched] = useState(false);

    //check whole inputs validity
    const isFormValid = name.trim() !== "" && comment.trim() !== "";

    // send request to action function and empty the name and comment filed
    const submitCommentHandler = event => {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        const { name, comment } = event.target;
        const formattedDateTime = formatDateTime(new Date());

        const commentData = {
            name: name.value,
            comment: comment.value,
            date: formattedDateTime,
            timestamp: Date.now()
        };

        submit(commentData, { method: 'post' });

        setName("");
        setComment("");
        setIsNameTouched(false);
        setIsCommentTouched(false);
    };

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const commentChangeHandler = (event) => {
        setComment(event.target.value);
    };

    const nameBlurHandler = () => {
        setIsNameTouched(true);
    };

    const commentBlurHandler = () => {
        setIsCommentTouched(true);
    };


    //if error is true then change the input color to red
    // if each field validity is ture then change color to green
    const nameError = name.trim() === "" && isNameTouched;
    const commentError = comment.trim() === "" && isCommentTouched;
    const nameValid = name.trim() !== "" && isNameTouched;
    const commentValid = comment.trim() !== "" && isCommentTouched;

    const submitting = navigation.state === 'submitting';

    return (
        <form onSubmit={submitCommentHandler} className={classes.form}>
            {/* name input field */}
            <div className={classes.name}>
                <label htmlFor='name'>Name</label>
                <input
                    id="name"
                    name="name"
                    value={name}
                    className={`${nameError ? classes.error : null}
                                ${nameValid ? classes.valid : null}`}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
            </div>
            {/* comment input field */}
            <div className={classes.text}>
                <label htmlFor='comment'>Leave a comment</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    className={`${commentError ? classes.error : null}
                                ${commentValid ? classes.valid : null}`}
                    onChange={commentChangeHandler}
                    onBlur={commentBlurHandler}
                />
            </div>
            {/* disable submit button if isFormValid === true */}
            <button disabled={!isFormValid || submitting}>{submitting ? "Submitting..." : "Submit"}</button>
        </form>
    )
};

export default CommentForm;