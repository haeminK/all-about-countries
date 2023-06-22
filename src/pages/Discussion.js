import { db } from "../database/firebase";
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore/lite';
import { json } from 'react-router-dom';

import Comments from "../components/comment/Comments";


const DiscussionPage = () => {

    return <Comments />;
}

export default DiscussionPage;

// Action function sending comment information submitted by a user
export async function action({ request }) {
    const data = await request.formData();

    const commentData = {
        name: data.get('name'),
        comment: data.get('comment'),
        date: data.get('date'),
        timestamp: data.get('timestamp')
    };

    try {
        await addDoc(collection(db, "comments"), commentData);
        return null;

    } catch (e) {
        throw json({ message: 'Error while submitting a comment' }, { status: 500 });
    };
}

// Loader function getting all comments from firebase
export async function loader() {
    try {
        const response = await getDocs(
            query(
                collection(db, 'comments'),
                orderBy('timestamp', 'desc')
            )
        )
        return response;
    } catch (e) {
        throw json({ message: 'Error while loading comments' }, { status: 500 });
    };
};