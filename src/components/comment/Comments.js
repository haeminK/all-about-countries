import { useLoaderData } from "react-router-dom";

import CommentForm from './CommentForm';
import classes from "./Comments.module.css";

const Comments = () => {
    const commentsData = useLoaderData();

    //load data from loader and make a list of comments wraped around by <li>
    const commentList = commentsData.docs.map((doc) => {
        const { date, name, comment } = doc.data();
        return (
            <li key={doc.id} className={classes.comment}>
                <div className={classes.name}>{name}</div>
                <div className={classes.text}>{comment}</div>
                <div className={classes.date}>{date}</div>
            </li>
        );
    });


    return (
        <div className={classes.outer}>
            <div className={classes.inner}>
                <CommentForm />
                <ul className={classes.comments}>{commentList}</ul>
            </div>
        </div>
    );
};

export default Comments;
