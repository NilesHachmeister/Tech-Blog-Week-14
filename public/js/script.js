const submitPostBtn = document.querySelector('#submit-post-btn');
const submitCommentBtn = document.querySelector('#submit-comment-btn');


const submitNewPost = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed create post, please try again');
        }
    }
    else {
        alert('Failed create post, please try again');
    }
};

const submitNewComment = async (e) => {
    e.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const data = document.querySelector('.custom-card')
    const id = data.dataset.id;

    if (content) {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace(`/api/posts/${id}`);
        } else {
            alert('Failed create comment, please try again');
        }
    }
    else {
        alert('Failed create comment, please try again');
    }
};


if (submitPostBtn) {
    submitPostBtn.addEventListener('click', submitNewPost);
}

if (submitCommentBtn) {
    submitCommentBtn.addEventListener('click', submitNewComment);
}