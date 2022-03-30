const submitPostBtn = document.querySelector('#submit-post-btn');


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


if (submitPostBtn) {
    submitPostBtn.addEventListener('click', submitNewPost);
}